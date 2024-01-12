import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ProductService from '../../services/ProductServices';
function Header() {

    const navigate = useNavigate();
    const [cart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItemCount, setTotalItemCount] = useState(0);
    const [username, setUsername] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        // Calculate total price
        const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

        // Calculate total item count
        const totalItemCount = cart.reduce((total, item) => total + item.quantity, 0);

        // Update state with totalPrice and totalItemCount
        setTotalPrice(totalPrice);
        setTotalItemCount(totalItemCount);
    }, [cart]);

    //
    useEffect(() => {
        // Function to check token status

        const token = Cookies.get('jwtToken');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                const userUsername = decoded.UserName;
                setUsername(userUsername);

            } catch (error) {
                console.error('Error decoding JWT token:', error);
            }
        }

    }, []);

    const Logout = () => {
        // Xóa token từ cookies
        Cookies.remove("jwtToken");
        // Chuyển hướng đến trang đăng nhập
        navigate('/login');
    };

    //search
    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const result = await ProductService.Search(keyword);
                setSearchResults(result.data);
            } catch (error) {
                console.error(error);
            }
        };

        if (keyword) {
            fetchSearchResults();
        } else {
            setSearchResults([]);
        }
    }, [keyword]);



    const handleInputChange = async (e) => {
        const inputKeyword = e.target.value;
        setKeyword(inputKeyword);
    };


    return (
        <>
            <div className="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
                <div className="container">
                    <div className="row">
                        {/* Begin Header Logo Area */}
                        <div className="col-lg-3">
                            <div className="logo pb-sm-30 pb-xs-30">
                                <a href="/">
                                    <img src="../frontend/images/menu/logo/1.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        {/* Header Logo Area End Here */}
                        {/* Begin Header Middle Right Area */}
                        <div className="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
                            <div className="row">
                                {/* Begin Header Middle Searchbox Area */}
                                <div className="col-md-6">
                                    <div className="position-relative">
                                        <form className="form my-2 my-lg-0">
                                            <input
                                                className="form-control mr-sm-2"
                                                type="text"
                                                placeholder="Enter your search key ..."
                                                value={keyword}
                                                onChange={handleInputChange}
                                            />
                                            {searchResults.length > 0 && (
                                                <ul className="list-group position-absolute mt-1 w-100" style={{ zIndex: 1000 }}>
                                                    {searchResults.map(result => (
                                                        <li key={result.id} className="list-group-item">
                                                            <Link to={`/danh-muc-san-pham/${result.category_Id}`} className="text-decoration-none text-dark">
                                                                {result.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </form>
                                    </div>
                                </div>
                                {/* Header Middle Searchbox Area End Here */}
                                {/* Begin Header Middle Right Area */}
                                <div className="col-md-6">
                                    <div className="header-middle-right">
                                        <ul className="hm-menu">
                                            {/* Begin Header Middle Wishlist Area */}
                                            <li className="hm-wishlist">
                                                <a href="wishlist.html">
                                                    <span className="cart-item-count wishlist-item-count">0</span>
                                                    <i><FaRegHeart /></i>
                                                </a>
                                            </li>
                                            {/* Header Middle Wishlist Area End Here */}

                                            {/* Begin Header Mini Cart Area */}
                                            <li className="hm-minicart">
                                                <Link to="/gio-hang" className="hm-minicart-trigger">
                                                    <span className="item-icon">£{totalPrice.toFixed(2)}</span>
                                                    <span className="item-text">
                                                        <span className="cart-item-count">{totalItemCount}</span>
                                                    </span>
                                                </Link>
                                                <span></span>
                                            </li>

                                            {/* Conditionally render based on login status */}
                                            {username ? (
                                                <li className="pl-4 pb-5 d-flex align-items-center">
                                                    <p className="mb-0 mr-2">Welcome, {username}!</p>
                                                    <button onClick={Logout} className="btn btn-sm btn-outline-secondary">Logout</button>
                                                </li>

                                            ) : (
                                                <li className='pl-4'>

                                                    <Link to="/login">
                                                        <i className="fa fa-user pl-2"></i> Login
                                                    </Link>

                                                </li>
                                            )}
                                            {/* Header Mini Cart Area End Here */}
                                        </ul>
                                    </div>
                                </div>
                                {/* Header Middle Right Area End Here */}
                            </div>
                        </div>
                        {/* Header Middle Right Area End Here */}
                    </div>
                </div>
            </div>



        </>
    )
}
export default Header;
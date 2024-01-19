import "../../../index.css"
import { useState } from "react";
import ProductService from "../../../services/ProductServices";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Productitem from "../Product/ProductItem";

function ProductHome(props) {
    const [products, setProduct] = useState([]);
    const [limit, setLimit] = useState(4);
    const [page, setPage] = useState(1);
    useEffect(function () {
        (async function () {
            try {
                await ProductService.getProductByCategoryParent(props.category.id, limit, page).then(function (result) {
                    setProduct(result.data);
                });
            } catch (error) {

                setProduct([]);


            }
        })();
    }, [props.category.id, limit, page]);
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };
    if (products.length != 0) {
        return (
            <div className="container my-3" style={{ background: '#fff' }}>
                <div className="product-category">
                    <h3 className="text-bold pt-4" style={{ textTransform: 'uppercase' }}>{props.category.name}</h3>
                    <div className="row" >
                        {products.map(function (product, index) {
                            return <Productitem product={product} key={index} />
                        })}

                    </div>


                    <div className="row">
                        <div className="col-md-12">
                            <ul className="pagination justify-content-center m-3">
                                <li className="page-item">
                                    {/* Sử dụng hàm handlePageChange để thay đổi state `page` */}
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(page - 1)}
                                        disabled={page === 1} // Disable nút khi ở trang đầu tiên
                                    >
                                        Sau
                                    </button>
                                </li>
                                {/* Hiển thị các nút trang */}
                                <li className="page-item">
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(1)}
                                        disabled={page === 1} // Disable nút khi đang ở trang đó
                                    >
                                        1
                                    </button>
                                </li>
                                <li className="page-item">
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(2)}
                                        disabled={page === 2} // Disable nút khi đang ở trang đó
                                    >
                                        2
                                    </button>
                                </li>
                                <li className="page-item">
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(3)}
                                        disabled={page === 3} // Disable nút khi đang ở trang đó
                                    >
                                        3
                                    </button>
                                </li>
                                <li className="page-item">
                                    {/* Sử dụng hàm handlePageChange để thay đổi state `page` */}
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(page + 1)}
                                        disabled
                                        ={page === 3} // Disable nút khi ở trang cuối cùng
                                    >
                                        Tiếp
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProductHome;

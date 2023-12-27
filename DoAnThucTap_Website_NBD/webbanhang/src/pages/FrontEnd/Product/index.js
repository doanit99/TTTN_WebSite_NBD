import { useEffect } from "react";
import { useState } from "react";
import ProductService from "../../../services/ProductServices";
import Productitem from "./ProductItem";

function Product() {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(4);
    const [page, setPage] = useState(1);
    useEffect(function () {
        (async function () {
            try{
                const result = await  ProductService.getProductAll(limit, page);
                setProducts(result.data);
            }
            catch(error){
                console.error(error);
            }
            
        })();
    }, [limit, page])
    
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };
    return (
        <section className="maincontent">
            <div className="container my-3">
                <h3>TẤT CẢ SẢN PHẨM</h3>
                <div className="row">
                    {products.map(function (product, index) {
                        return <Productitem product={product} key={index} />
                    })}
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <button className="btn btn-success" onClick={() => setLimit(limit + 8)}>
                        Xem Thêm
                    </button>
                </div>
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
        </section>
    );

}
export default Product;
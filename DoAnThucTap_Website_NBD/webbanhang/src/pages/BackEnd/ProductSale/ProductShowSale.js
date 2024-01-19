import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaSave } from "react-icons/fa";
import { BiArrowBack } from 'react-icons/bi';
import ProductSaleService from "../../../services/ProductSaleServices";
import ProductService from "../../../services/ProductServices";

function ProductShowSale() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProducts] = useState([]);
    useEffect(function () {
        (async function () {
            await ProductSaleService.getById(id).then(function (result) {
                setProducts(result.data);
            });
        })();
    }, []);

    async function ProductDelete(id) {
        await ProductSaleService.remove(id).then(function (result) {
            alert('Xóa thành công');
            navigate('/admin/productsale', { replace: true });
        });

    }

    const [prod, setProduct] = useState([]);
    useEffect(function () {
        (async function () {
            await ProductService.getAll().then(function (result) {
                setProduct(result.data);
            });
        })();
    }, []);

    return (

        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">
                            Chi tiết sản phẩm giảm giá
                        </strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/productsale" className="btn btn-info btn-success"><BiArrowBack />Quay về danh sách</Link>
                        <Link to={"/admin/productsale/update/" + product.id} className="btn btn-info btn-success"><BiArrowBack />Cập nhật</Link>
                        <button className="btn btn-sm btn-danger p-2" onClick={() => ProductDelete(product.id)}><FaSave />Xóa</button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped">
                    <tbody >
                        <tr>
                            <th scope="row">Tên sản phẩm</th>
                            {prod.map((pr, index) => {
                                if (pr.id === product.productId) {
                                    return <td key={index}>{pr.name}</td>;
                                }
                            })}
                        </tr>

                        <tr>
                            <th scope="row">Phần trăm giảm giá</th>
                            <td>{product.discount}</td>
                        </tr>
                        <tr>
                            <th scope="row">Số lượng giảm</th>
                            <td>{product.qty}</td>
                        </tr>
                        <tr>
                            <th scope="row">Ngày bắt đầu giảm</th>
                            <td>{product.date_Begin}</td>
                        </tr>
                        <tr>
                            <th scope="row">Ngày kết thúc giảm</th>
                            <td>{product.date_End}</td>
                        </tr>
                        <tr>
                            <th scope="row">Ngày tạo</th>
                            <td>{product.createdAt}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>

    );
}
export default ProductShowSale;
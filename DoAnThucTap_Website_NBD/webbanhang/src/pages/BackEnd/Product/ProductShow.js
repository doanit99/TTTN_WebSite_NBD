import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductServices";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaSave } from "react-icons/fa";
import { BiArrowBack } from 'react-icons/bi';
import { urlImage } from "../../../config";
import Categoryservice from "../../../services/CategoryServices";
import BrandService from "../../../services/BrandServices";

function ProductShow() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProducts] = useState([]);
    useEffect(function () {
        (async function () {
            await ProductService.getById(id).then(function (result) {
                setProducts(result.data);
            });
        })();
    }, []);

    async function ProductDelete(id) {
        await ProductService.remove(id).then(function (result) {
            alert('Xóa thành công');
            navigate('/admin/product', { replace: true });
        });

    }

    const [categories, setCategories] = useState([]);
    useEffect(function () {
        (async function () {
            await Categoryservice.getAll().then(function (result) {
                setCategories(result.data);
            });
        })();
    }, []);

    const [brands, setBrands] = useState([]);
    useEffect(function () {
        (async function () {
            await BrandService.getAll().then(function (result) {
                setBrands(result.data);
            });
        })();
    }, []);
    return (

        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">
                            Chi tiết sản phẩm
                        </strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/product" className="btn btn-info btn-success"><BiArrowBack />Quay về danh sách</Link>
                        <Link to={"/admin/product/update/" + product.id} className="btn btn-info btn-success"><BiArrowBack />Cập nhật</Link>
                        <button className="btn btn-sm btn-danger p-2" onClick={() => ProductDelete(product.id)}><FaSave />Xóa</button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped">
                    <tbody >
                        <tr>
                            <th scope="row">Tên sản phẩm</th>
                            <td>{product.name}</td>
                        </tr>
                        <tr>
                            <th scope="row">Hình ảnh</th>
                            <td><img className='w-25 h-25' src={urlImage + "products/" + product.image} alt={product.image}></img></td>
                        </tr>
                        <tr>
                            <th scope="row">Thương hiệu</th>
                            {product.brand_Id !== 0 ? (
                                brands.map(function (br, index) {
                                    if (br.id === product.brand_Id) {
                                        return (
                                            <td key={index}>{br.name}</td>
                                        );
                                    }
                                    return null;
                                })
                            ) : 
                            (
                                <td>Sản phẩm chưa có thương hiệu nào</td>
                            )}
                        </tr>

                        <tr>
                            <th scope="row">Danh mục</th>
                            {product.category_Id !== 0 ? (
                                categories.map(function (cate, index) {
                                    if (cate.id === product.category_Id) {
                                        return (
                                            <td key={index}>{cate.name}</td>
                                        );
                                    }
                                    return null;
                                })
                            ) : 
                            (
                                <td>Sản phẩm chưa có danh mục</td>
                            )}
                        </tr>
                        <tr>
                            <th scope="row">Giá</th>
                            <td>{product.price}</td>
                        </tr>
                        <tr>
                            <th scope="row">Số lượng</th>
                            <td>{product.qty}</td>
                        </tr>
                        <tr>
                            <th scope="row">Mô tả</th>
                            <td>{product.description}</td>
                        </tr>
                        <tr>
                            <th scope="row">Chi tiết sản phẩm</th>
                            <td>{product.detail}</td>
                        </tr>
                        <tr>
                            <th scope="row">Ngày tạo</th>
                            <td>{product.createdAt}</td>
                        </tr>

                        <tr>
                            <th scope="row">Tình trạng</th>
                            <td>{product.status === 1 ? 'Xuất bản' : 'Chưa xuất bản'}</td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>

    );
}
export default ProductShow;
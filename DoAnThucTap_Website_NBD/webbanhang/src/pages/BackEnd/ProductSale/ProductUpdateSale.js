import { Link, useNavigate, useParams } from "react-router-dom";
import { FaSave } from 'react-icons/fa';
import { BiArrowBack } from 'react-icons/bi';
import { useState, useEffect } from "react";
import ProductService from "../../../services/ProductServices";
import Categoryservice from "../../../services/CategoryServices";
import BrandService from "../../../services/BrandServices";
function ProductUpdateSale() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [productId, setProductId] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [qty, setQty] = useState(0);
    const [date_Begin, setDate_Begin] = useState('');
    const [date_End, setDate_End] = useState('');



    const [products, setProducts] = useState([]);
    useEffect(function () {
        (async function () {
            await ProductService.getAll().then(function (result) {
                setProducts(result.data);
            });
        })();
    }, []);

    async function ProductUpdateSale(event) {

        event.preventDefault();
        const image = document.querySelector("#image")
        var product = new FormData();
        product.append("productId", productId);
        product.append("discount", discount);
        product.append("qty", qty);
        product.append("date_Begin", date_Begin);
        product.append("date_End", date_End);
        await ProductService.update(product, id)
            .then(function () {
                alert('Cập nhật thành công');
                navigate('/admin/product', { replace: true });
            });
    }

    useEffect(function () {
        (async function () {
            await ProductService.getById(id).then(function (result) {
                const tpm = result.data;
                setName(tpm.name);
                setBrand_Id(tpm.brand_Id);
                setCategory_Id(tpm.category_Id);
                setDetail(tpm.detail);
                setDescription(tpm.description);
                setPrice(tpm.price);
                setQty(tpm.qty);
                setStatus(tpm.status);

            });
        })();
    }, []);


    return (
        <form method="post" onSubmit={ProductUpdateSale}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Cập nhật sản phẩm
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <Link to="/admin/product" className="btn btn-info btn-success"><BiArrowBack />Quay về danh sách</Link>
                            <button type="submit" className="btn btn-sm btn-success p-2"><FaSave />Lưu</button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                    <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="">Tên sản phẩm</label>
                                <select name="productId" value={productId} onChange={(e)=>setProductId(e.target.value)} 
                                className="form-control">                                  
                                    {product.map(function(pr,index){
                                        return(<option key={index} value={pr.id}>{pr.name}</option>);
                                    })}
                                </select>
                            </div>
                        

                            <div className="mb-3">
                                <label htmlFor="">Phần trăm giảm giá</label>
                                <input type="number" name="discount" onChange={(e) => setDiscount(e.target.value)} className="form-control" required max="100"></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Số lượng</label>
                               <input type="number" name="qty" onChange={(e) => setQty(e.target.value)} 
                                        className="form-control" required></input>
                             
                            </div>
                          

                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="">Ngày bắt đầu</label>
                                <input type="datetime-local" name="date_Begin" onChange={(e) => setDate_Begin(e.target.value)} className="form-control" required></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Ngày kết thúc</label>
                                <input type="datetime-local" name="date_End" onChange={(e) => setDate_End(e.target.value)} className="form-control" required></input>
                            </div>
                           

                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
export default ProductUpdateSale;
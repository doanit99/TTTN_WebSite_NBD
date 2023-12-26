import { Link, useNavigate } from "react-router-dom";
import { FaSave } from 'react-icons/fa';
import { BiArrowBack } from 'react-icons/bi';
import { useState, useEffect} from "react";
import ProductService from "../../../services/ProductServices";
function ProductCreate(){
    const navigate=useNavigate();
    const [name,setName]=useState('');
    const [category_Id,setCategory_Id]=useState(0);
    const [brand_Id,setBrand_Id]=useState(0);
    const [price,setPrice]=useState(0);
    const [qty,setQty]=useState(0);
    const [description,setDescription]=useState(''); 
    const [detail,setDetail]=useState('');
    const [status,setStatus]=useState(0);

    async function ProductStore(event)
    {
        event.preventDefault();
        const image =document.querySelector("#image");
        var product=new FormData();
        product.append("name",name);
        product.append("category_Id",category_Id);
        product.append("brand_Id",brand_Id);
        product.append("price",price);
        product.append("qty",qty);
        product.append("description",description);
        product.append("detail",detail);
        product.append("status",status);
        product.append("image",image.files[0]);
        ProductService.create(product)
        .then(function(result){
            alert('Thêm thành công');
            navigate('/admin/product',{replace:true});
        });     
    }

    const [products, setProducts]=useState([]);
    useEffect(function(){
        (async function(){
            await ProductService.getAll().then(function(result){
                setProducts(result.data);
            });
        })();
    },[]);
    return(
        <form method="post" onSubmit={ProductStore}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm sản phẩm
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <Link  to="/admin/product" className="btn btn-info btn-success"><BiArrowBack/>Quay về danh sách</Link>
                            <button type="submit" className="btn btn-sm btn-success p-2"><FaSave/>Lưu</button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="">Tên thương hiệu</label>
                                <input type="text" name="brand_Id" onChange={(e)=>setBrand_Id(e.target.value)} className="form-control" required></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Tên danh mục</label>
                                <input type="text" name="category_Id" onChange={(e)=>setCategory_Id(e.target.value)} className="form-control" required></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Tên sản phẩm</label>
                                <input type="text" name="name" onChange={(e)=>setName(e.target.value)} className="form-control" required></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Mô tả</label>
                                <input type="text" name="description" onChange={(e)=>setDescription(e.target.value)} className="form-control" required></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Chi tiết</label>
                                <input type="text" name="detail" onChange={(e)=>setDetail(e.target.value)} className="form-control" required></input>
                            </div>
                           
                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="">Số lượng</label>
                                <input type="number" name="qty" onChange={(e)=>setQty(e.target.value)} className="form-control" required></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Giá</label>
                                <input type="number" name="price" onChange={(e)=>setPrice(e.target.value)} className="form-control" required></input>
                            </div>
                            {/* <div className="mb-3">
                                <label htmlFor="">Sắp xếp</label>
                                <select name="sort_order" value={sort_order} onChange={(e)=>setSort_order(e.target.value)} 
                                className="form-control">
                                    <option value="0">None</option>
                                    {products.map(function(br,index){
                                        return(<option key={index} value={br.sort_order+1}>Sau:{br.name}</option>);
                                    })}
                                </select>
                            </div>
                             */}
                            <div className="mb-3">
                                <label htmlFor="image">Hình</label>
                                <input type="file" id="image" name="image" className="form-control" required></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Trạng thái</label>
                                <select name="status" onChange={(e)=>setStatus(e.target.value)} className="form-control">
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
export default ProductCreate;
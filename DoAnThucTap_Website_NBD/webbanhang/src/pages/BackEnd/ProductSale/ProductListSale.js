import {FaPlus, FaEdit, FaEye, FaTrash} from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { urlImage } from '../../../config';
import ProductService from '../../../services/ProductServices';
import ProductSaleService from '../../../services/ProductSaleServices';

function ProductListSale(){
    const [products, setProducts]=useState([]);
    const [statusdel, setStatusDel]=useState(0);

    useEffect(function(){
        (async function(){
            await ProductService.GetProductSale().then(function(result){
                setProducts(result.data);
            });
        })();
    },[statusdel]);

async function ProductDelete(productSaleId){
    await ProductSaleService.remove(productSaleId).then(function(result){
        alert('Xóa thành công');
        setStatusDel(result.data);
    });
}

    return(
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-primary">TẤT CẢ SẢN PHẨM GIẢM GIÁ</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/productsale/create"><FaPlus/>Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th className='text-center' style={{width:30}}>#</th>
                            <th className='text-center' style={{width:120}}>Hình</th>
                            <th>Tên sản phẩm</th>       
                            <th className='text-center'>Phần trăm giảm</th>                   
                            <th className='text-center'>Số lượng</th>
                            <th className='text-center'>Mô tả</th>
                            <th className='text-center'>Chức năng</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(function(product,index){
                            return(<tr key={index}>
                                <td className='text-center'><input type='checkbox'></input></td>
                                <td className='text-center'><img className='w-100 h-100' src={urlImage+"products/"+product.imageSale} alt={product.imageSale}></img></td>
                                <td >{product.nameSale}</td>
                                <td className='text-center'>{product.discountSale}%</td>
                                <td className='text-center'>{product.qtySale}</td>
                                <td className='text-center'>{product.descriptionSale}</td>
                                <td className='text-center'>
                                    <Link to={`/admin/productsale/update/${product.productSaleId}`} className="btn btn-sm btn-info me-1"><FaEdit/></Link>
                                    <Link to={`/admin/productsale/show/${product.productSaleId}`} className="btn btn-sm btn-success me-1"><FaEye/></Link>
                                    <button onClick={()=>ProductDelete(product.productSaleId)} className="btn btn-sm btn-danger"><FaTrash/></button>
                                </td>
                             
                            </tr>)
                        })}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ProductListSale;
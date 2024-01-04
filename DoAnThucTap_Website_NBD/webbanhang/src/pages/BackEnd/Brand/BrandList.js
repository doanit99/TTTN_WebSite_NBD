import {FaPlus, FaEdit, FaEye, FaTrash} from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BrandService from '../../../services/BrandServices';
import { urlImage } from '../../../config';

function BrandList(){
    const [brands, setBrands]=useState([]);
    const [statusdel, setStatusDel]=useState(0);

    useEffect(function(){
        (async function(){
            await BrandService.getAll().then(function(result){
                setBrands(result.data);
            });
        })();
    },[statusdel]);

async function BrandDelete(id){
    await BrandService.remove(id).then(function(result){
        alert('Xóa thành công');
        setStatusDel(result.data);
    });
}

    return(
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-primary">TẤT CẢ THƯƠNG HIỆU</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/brand/create"><FaPlus/>Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th className='text-center' style={{width:30}}>#</th>
                            <th className='text-center' style={{width:120}}>Hình</th>
                            <th>Tên thương hiệu</th>
                           
                            <th className='text-center'>Ngày tạo</th>
                            <th className='text-center'>Chức năng</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {brands.map(function(brand,index){
                            return(<tr key={index}>
                                <td className='text-center'><input type='checkbox'></input></td>
                                <td className='text-center'><img className='w-100 h-100' src={urlImage+"brands/"+brand.image} alt={brand.image}></img></td>
                                <td >{brand.name}</td>
                              
                                <td className='text-center'>{brand.createdAt}</td>
                                <td className='text-center'>
                                    <Link to={`/admin/brand/update/${brand.id}`} className="btn btn-sm btn-info me-1"><FaEdit/></Link>
                                    <Link to={`/admin/brand/show/${brand.id}`} className="btn btn-sm btn-success me-1"><FaEye/></Link>
                                    <button onClick={()=>BrandDelete(brand.id)} className="btn btn-sm btn-danger"><FaTrash/></button>
                                </td>
                             
                            </tr>)
                        })}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default BrandList;
import {FaPlus, FaEdit, FaEye, FaTrash} from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { urlImage } from '../../../config';
import BannerService from '../../../services/BannertServices';

function BannerList(){
    const [banners, setBanners]=useState([]);
    const [statusdel, setStatusDel]=useState(0);

    useEffect(function(){
        (async function(){
            await BannerService.getAll().then(function(result){
                setBanners(result.data);
            });
        })();
    },[statusdel]);

async function BannerDelete(id){
    await BannerService.remove(id).then(function(result){
        alert('Xóa thành công');
        setStatusDel(result.data);
    });
}

    return(
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-primary">TẤT CẢ BANNER</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/banner/create"><FaPlus/>Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th className='text-center' style={{width:30}}>#</th>
                            <th className='text-center' style={{width:120}}>Hình</th>
                            <th>Tên banner</th>
                            <th>Vị trí</th>
                            <th className='text-center'>Ngày tạo</th>
                            <th className='text-center'>Chức năng</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {banners.map(function(banner,index){
                            return(<tr key={index}>
                                <td className='text-center'><input type='checkbox'></input></td>
                                <td className='text-center'><img className='w-100 h-100' src={urlImage+"banners/"+banner.image} alt={banner.image}></img></td>
                                <td >{banner.name}</td>
                                <td >{banner.position}</td>
                                <td className='text-center'>{banner.createdAt}</td>
                                <td className='text-center'>
                                    <Link to={`/admin/banner/update/${banner.id}`} className="btn btn-sm btn-info me-1"><FaEdit/></Link>
                                    <Link to={`/admin/banner/show/${banner.id}`} className="btn btn-sm btn-success me-1"><FaEye/></Link>
                                    <button onClick={()=>BannerDelete(banner.id)} className="btn btn-sm btn-danger"><FaTrash/></button>
                                </td>
                             
                            </tr>)
                        })}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default BannerList;
import { useEffect, useState } from "react";
import BrandService from "../../../services/BrandServices";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaSave } from "react-icons/fa";
import { BiArrowBack } from 'react-icons/bi';
import { urlImage } from "../../../config";

function BrandShow() {
    const navigate=useNavigate();
    const { id } = useParams();
    const [brand, setBrands] = useState([]);
    useEffect(function () {
        (async function () {
            await BrandService.getById(id).then(function (result) {
                setBrands(result.data);
            });
        })();
    }, []);

    async function BrandDelete(id){
        await BrandService.remove(id).then(function(result){
            alert('Xóa thành công');
            navigate('/admin/brand',{replace:true});
        });
    
    }

    return (

        <div className="card">
            <div className="card-header">
                <div className="row">
                <div className="col-md-6">
                    <strong className="text-danger">
                        Chi tiết thương hiệu
                    </strong>
                </div>
                <div className="col-md-6 text-end">
                    <Link to={"/admin/brand/update/"+brand.id} className="btn btn-info btn-success"><BiArrowBack />Cập nhật</Link>
                    <button className="btn btn-sm btn-danger p-2" onClick={()=>BrandDelete(brand.id)}><FaSave />Xóa</button>
                </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped">
                    <tbody >
                        <tr>
                            <th scope="row">Tên thương hiệu</th>
                            <td>{brand.name}</td>
                        </tr>
                        <tr>
                            <th scope="row">Hình ảnh</th>
                            
                            <td><img className='w-25 h-25' src={urlImage+brand.image} alt={brand.image}></img></td>
                        </tr>
                        <tr>
                            <th scope="row">Mô tả</th>
                            <td>{brand.description}</td>
                        </tr>
                       
                        <tr>
                            <th scope="row">Ngày tạo</th>
                            <td>{brand.createdAt}</td>
                        </tr>
                       
                        <tr>
                            <th scope="row">Tình trạng</th>
                            <td>{brand.status === 1 ? 'Xuất bản' : 'Chưa xuất bản'}</td>
                            
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>

    );
}
export default BrandShow;
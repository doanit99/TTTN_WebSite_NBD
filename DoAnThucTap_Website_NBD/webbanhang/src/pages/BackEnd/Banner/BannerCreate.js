import { Link, useNavigate } from "react-router-dom";
import { FaSave } from 'react-icons/fa';
import { BiArrowBack } from 'react-icons/bi';
import { useState} from "react";
import BannerService from "../../../services/BannertServices";
function BannerCreate(){
    const navigate=useNavigate();
    const [name,setName]=useState('');
    const [link,setLink]=useState('');
    const [description,setDescription]=useState('');
    const [postion,setPosition]=useState('');
    const [status,setStatus]=useState(0);

    async function BannerStore(event)
    {
        event.preventDefault();
        const image =document.querySelector("#image");
        var banner=new FormData();
        banner.append("name",name);
        banner.append("link",link);
        banner.append("description",description);
        banner.append("status",status);
        banner.append("postion",postion);
        banner.append("image",image.files[0]);
        BannerService.create(banner)
        .then(function(result){
            alert('Thêm thành công');
            navigate('/admin/banner',{replace:true});
        });     
    }

    return(
        <form method="post" onSubmit={BannerStore}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm banner
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <Link  to="/admin/banner" className="btn btn-info btn-success"><BiArrowBack/>Quay về danh sách</Link>
                            <button type="submit" className="btn btn-sm btn-success p-2"><FaSave/>Lưu</button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="">Tên banner</label>
                                <input type="text" name="name" onChange={(e)=>setName(e.target.value)} className="form-control" required></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Đường dẫn(/....)</label>
                                <input type="text" name="link" onChange={(e)=>setLink(e.target.value)} className="form-control" required></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Mô tả</label>
                                <input type="text" name="description" onChange={(e)=>setDescription(e.target.value)} className="form-control" required></input>
                            </div>
                           
                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="">Vị trí</label>
                                <select name="position" onChange={(e)=>setPosition(e.target.value)} 
                                className="form-control">
                                    <option value="1">Dưới menu</option>
                                    <option value="2">Vị trí khác</option>
                                </select>
                            </div>
                            
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
export default BannerCreate;
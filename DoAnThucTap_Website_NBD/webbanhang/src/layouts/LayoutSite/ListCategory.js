import { TfiHandPointRight } from 'react-icons/tfi';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryService from "../../services/CategoryServices";

function ListCategory() {
    const [listCategory, setListCategory] = useState([]);
    useEffect(function () {
        (async function () {
            try{
                const result = await CategoryService.getCategoryByParentId(1);
                setListCategory(result.data);
            }
            catch(error){
                console.error(error);
            }
            
        })();
    }, [])
    return (
        <div className="listcategory mb-5">
            <h3 className="bg-info p-3 m-0 text-center">Danh mục sản phẩm</h3>
            <ul>
                {listCategory.map(function (cat, index) {
                    return <li key={index}>
                        <Link className='text-decoration-none text-dark' to={"/danh-muc-san-pham/"+cat.id}><TfiHandPointRight/> {cat.name}</Link>
                    </li>
                })}

            </ul>
        </div>
    );
}
export default ListCategory;
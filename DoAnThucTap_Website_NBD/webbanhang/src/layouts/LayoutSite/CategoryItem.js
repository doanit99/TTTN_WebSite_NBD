import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Categoryservice from "../../services/CategoryServices";

function Categoryitem(props) {
    const rowcategory = props.category;
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        (async function () {
            try {
                const result = await Categoryservice.getByParentId(rowcategory.id);
                setCategories(result.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);

            }
        })();
    }, [rowcategory.id]);
    if (loading) {
        return <p>Loading...</p>;
    } else if (categories == null) {
        return (
            <li className="right-menu">
                <Link className="text-dark" to={categories.slug}>{categories.name}</Link>
            </li>
        );
    }
    else {
        return (

            <li className="right-menu">
                <Link to={categories.slug}
                    role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'black'}}>
                    {categories.name}
                </Link>
                <ul className="dropdown-menu text-dark">
                    {categories.map(function (categories1, index) {
                        return <li key={index}><Link className="dropdown-item" to={categories1.slug}>{categories1.name}</Link></li>
                    })}

                </ul>
            </li>
        );
    }
}
export default Categoryitem;
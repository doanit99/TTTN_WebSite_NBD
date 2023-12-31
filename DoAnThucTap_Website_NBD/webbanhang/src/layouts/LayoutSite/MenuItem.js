import { Link } from "react-router-dom";
import MenuService from "../../services/MenuServices";
import { useEffect } from "react";
import { useState } from "react";

function Menuitem(props) {
    const rowmenu = props.menu;
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        (async function () {
            try {
                const result = await MenuService.getByParentId(rowmenu.id);
                setMenus(result.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);

            }
        })();
    }, [rowmenu.id]);
    if (loading) {
        return <p>Loading...</p>;
    } else if (menus == null) {
        return (
            <li className="nav-item">
                <Link className="nav-link text-white" to={rowmenu.link}>{rowmenu.name}</Link>
            </li>
        );
    }
    else {
        return (

            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-white" to={rowmenu.link}
                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {rowmenu.name}
                </Link>
                <ul className="dropdown-menu">
                    {menus.map(function (menu1, index) {
                        return <li key={index}><Link className="dropdown-item" to={menu1.link}>{menu1.name}</Link></li>
                    })}

                </ul>
            </li>
        );
    }
}
export default Menuitem;
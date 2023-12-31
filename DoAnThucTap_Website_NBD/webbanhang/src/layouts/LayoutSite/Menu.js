import { useEffect, useState } from "react";
import Menuitem from "./MenuItem";
import MenuService from "../../services/MenuServices";

function Menu() {
    const [menus, setMenus] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await MenuService.getByParentId(1);
                setMenus(result.data);
            }
            catch (error) {
                console.error(error);
            }

        })();
    }, [])
    return (
        <>

            <div className="header-bottom header-sticky d-none d-lg-block d-xl-block">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    {menus.map(function (menu, index) {
                                        return <Menuitem key={index} menu={menu} />
                                    })}
                                </ul>
                            </div>

                        </div>
                    </nav>
                </div>
            </div>
            {/* Header Bottom Area End Here */}
            {/* Begin Mobile Menu Area */}
            <div className="mobile-menu-area d-lg-none d-xl-none col-12">
                <div className="container">
                    <div className="row">
                        <div className="mobile-menu">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Menu;
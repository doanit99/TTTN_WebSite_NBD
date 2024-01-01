import { Outlet } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";


function LayoutSite() {
    return (
        <>
            <div className="body-wrapper">
                <header>
                    <Header />
                    <Menu />                   
                </header>
                
                <Outlet />
                <Footer/>
            </div>

            {/* <Conment/> */}
            {/* <News/>
        <Footer/>
        <Copyright/> */}
        </>
    );
}
export default LayoutSite;
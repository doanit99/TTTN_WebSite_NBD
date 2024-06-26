import Cart from "../pages/FrontEnd/Cart";
import Contact from "../pages/FrontEnd/Contact";
import Home from "../pages/FrontEnd/Home";
import Product from "../pages/FrontEnd/Product";
import ProductCategory from "../pages/FrontEnd/ProductCategory";
import ProductDetail from "../pages/FrontEnd/ProductDetail";

const RouterPublic=[
    {path:'/',conponent:Home},
    {path:'/product',conponent:Product},
    {path:'/chi-tiet-san-pham/:id',conponent:ProductDetail},
    {path:'/danh-muc-san-pham/:id',conponent:ProductCategory},
    {path:'/gio-hang',conponent:Cart},

    {path:'/contact',conponent:Contact},
    
];
export default RouterPublic;
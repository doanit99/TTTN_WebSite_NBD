import Home from "../pages/FrontEnd/Home";
import Product from "../pages/FrontEnd/Product";
import ProductDetail from "../pages/FrontEnd/ProductDetail";

const RouterPublic=[
    {path:'/',conponent:Home},
    {path:'/product',conponent:Product},
    {path:'/chi-tiet-san-pham/:id',conponent:ProductDetail},
    
];
export default RouterPublic;
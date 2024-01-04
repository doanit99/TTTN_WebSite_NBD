import BrandCreate from "../pages/BackEnd/Brand/BrandCreate";
import BrandList from "../pages/BackEnd/Brand/BrandList";
import BrandShow from "../pages/BackEnd/Brand/BrandShow";
import BrandUpdate from "../pages/BackEnd/Brand/BrandUpdate";
import Dashboard from "../pages/BackEnd/Dasboard";
import ProductCreate from "../pages/BackEnd/Product/ProductCreate";
import ProductList from "../pages/BackEnd/Product/ProductList";
import ProductShow from "../pages/BackEnd/Product/ProductShow";
import ProductUpdate from "../pages/BackEnd/Product/ProductUpdate";

const RouterPrivate=[
    {path:'/admin',conponent:Dashboard},

    {path:'/admin/brand',conponent:BrandList},
    {path:'/admin/brand/create',conponent:BrandCreate},
    {path:'/admin/brand/update/:id',conponent:BrandUpdate},
    {path:'/admin/brand/show/:id',conponent:BrandShow},  

    {path:'/admin/product',conponent:ProductList},
    {path:'/admin/product/create',conponent:ProductCreate},
    {path:'/admin/product/update/:id',conponent:ProductUpdate},
    {path:'/admin/product/show/:id',conponent:ProductShow},  

];
export default RouterPrivate;
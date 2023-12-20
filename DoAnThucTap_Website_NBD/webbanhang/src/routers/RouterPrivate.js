import BrandCreate from "../pages/BackEnd/Brand/BrandCreate";
import BrandList from "../pages/BackEnd/Brand/BrandList";
import BrandShow from "../pages/BackEnd/Brand/BrandShow";
import BrandUpdate from "../pages/BackEnd/Brand/BrandUpdate";
import Dashboard from "../pages/BackEnd/Dasboard";

const RouterPrivate=[
    {path:'/admin',conponent:Dashboard},

    {path:'/admin/brand',conponent:BrandList},
    {path:'/admin/brand/create',conponent:BrandCreate},
    {path:'/admin/brand/update/:id',conponent:BrandUpdate},
    {path:'/admin/brand/show/:id',conponent:BrandShow},  
];
export default RouterPrivate;
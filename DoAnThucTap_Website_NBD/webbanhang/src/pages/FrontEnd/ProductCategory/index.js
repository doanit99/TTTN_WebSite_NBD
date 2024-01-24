import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductServices";
import CategoryService from "../../../services/CategoryServices";
import { useParams } from "react-router-dom";
import ListCategory from "../../../layouts/LayoutSite/ListCategory";
import Productitem from "../Product/ProductItem";

function ProductCategory() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState("");
    document.title = title;
    useEffect(function () {
        (async function () {
            try {
                const infocategory = await CategoryService.getById(id);
                const catid = infocategory.data.id;
                setTitle(infocategory.data.name);
                const infoproduct = await ProductService.getProductHome(catid);
                setProducts(infoproduct.data);
            } catch (error) {
                setProducts([]);
            }
        })();

    }, [id]);
    if (products.length === 0) {
        return (
            <div class="content-wraper pt-60 pb-60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 order-1 order-lg-2">
                        {/* Begin Li's Banner Area */}
                        <div class="single-banner shop-page-banner">
                            <a href="#">
                                <img src="http://localhost:3000/frontend/images/bg-banner/2.jpg" alt="Li's Static Banner" />
                            </a>
                        </div>
                        {/* Li's Banner Area End Here */}
                        {/* shop-top-bar start */}
                        <div class="shop-top-bar mt-30">
                            <div class="shop-bar-inner">
                                <div class="product-view-mode">
                                    {/* shop-item-filter-list start */}
                                    <ul class="nav shop-item-filter-list" role="tablist">
                                        <li role="presentation"><a data-toggle="tab" role="tab" aria-controls="grid-view" href="#grid-view"><i class="fa fa-th"></i></a></li>
                                        <li class="active" role="presentation"><a aria-selected="true" class="active show" data-toggle="tab" role="tab" aria-controls="list-view" href="#list-view"><i class="fa fa-th-list"></i></a></li>
                                    </ul>
                                    {/* shop-item-filter-list end */}
                                </div>
                                
                            </div>
                            {/* product-select-box start */}
                            <div class="product-select-box">
                                <div class="product-short">
                                    <p>Sort By:</p>
                                    <select class="nice-select">
                                        <option value="trending">Relevance</option>
                                        <option value="sales">Name (A - Z)</option>
                                        <option value="sales">Name (Z - A)</option>
                                        <option value="rating">Price (Low &gt; High)</option>
                                        <option value="date">Rating (Lowest)</option>
                                        <option value="price-asc">Model (A - Z)</option>
                                        <option value="price-asc">Model (Z - A)</option>
                                    </select>
                                </div>
                            </div>
                            {/* product-select-box end */}
                        </div>
                        {/* shop-top-bar end */}
                        {/* shop-products-wrapper start */}
                        <div class="shop-products-wrapper">
                            <div class="tab-content">
                                <div id="grid-view" class="tab-pane fade" role="tabpanel">
                                    <div class="product-area shop-product-area">
                                        <div class="row">
                                            <p className="text-center">Không có sản phẩm</p>
                                        </div>
                                    </div>
                                </div>

                              
                            </div>
                        </div>

                        {/* shop-products-wrapper end */}
                    </div>
                    <div class="col-lg-3 order-2 order-lg-1">
                       
                        {/*sidebar-categores-box start  */}
                        <div class="sidebar-categores-box">
                            <div class="sidebar-title">
                                <h2>Filter By</h2>
                            </div>
                           
                          
                            {/* filter-sub-area start */}
                            <ListCategory />
                            {/* filter-sub-area end */}
                          
                            {/* filter-sub-area start */}
                            <div class="filter-sub-area pt-sm-10 pt-xs-10">
                                <h5 class="filter-sub-titel">Color</h5>
                                <div class="color-categoriy">
                                    <form action="#">
                                        <ul>
                                            <li><span class="white"></span><a href="#">White (1)</a></li>
                                            <li><span class="black"></span><a href="#">Black (1)</a></li>
                                            <li><span class="Orange"></span><a href="#">Orange (3) </a></li>
                                            <li><span class="Blue"></span><a href="#">Blue  (2) </a></li>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                            {/* filter-sub-area end */}
                            
                            
                        </div>
                        {/*sidebar-categores-box end  */}
                       
                    </div>
                </div>
            </div>
        </div>
        );
    }
    else {
        return (
            <div class="content-wraper pt-60 pb-60">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9 order-1 order-lg-2">
                            {/* Begin Li's Banner Area */}
                            <div class="single-banner shop-page-banner">
                                <a href="#">
                                    <img src="http://localhost:3000/frontend/images/bg-banner/2.jpg" alt="Li's Static Banner" />
                                </a>
                            </div>
                            {/* Li's Banner Area End Here */}
                            {/* shop-top-bar start */}
                            <div class="shop-top-bar mt-30">
                                <div class="shop-bar-inner">
                                    <div class="product-view-mode">
                                        {/* shop-item-filter-list start */}
                                        <ul class="nav shop-item-filter-list" role="tablist">
                                            <li role="presentation"><a data-toggle="tab" role="tab" aria-controls="grid-view" href="#grid-view"><i class="fa fa-th"></i></a></li>
                                            <li class="active" role="presentation"><a aria-selected="true" class="active show" data-toggle="tab" role="tab" aria-controls="list-view" href="#list-view"><i class="fa fa-th-list"></i></a></li>
                                        </ul>
                                        {/* shop-item-filter-list end */}
                                    </div>
                                    
                                </div>
                                {/* product-select-box start */}
                                <div class="product-select-box">
                                    <div class="product-short">
                                        <p>Sort By:</p>
                                        <select class="nice-select">
                                            <option value="trending">Relevance</option>
                                            <option value="sales">Name (A - Z)</option>
                                            <option value="sales">Name (Z - A)</option>
                                            <option value="rating">Price (Low &gt; High)</option>
                                            <option value="date">Rating (Lowest)</option>
                                            <option value="price-asc">Model (A - Z)</option>
                                            <option value="price-asc">Model (Z - A)</option>
                                        </select>
                                    </div>
                                </div>
                                {/* product-select-box end */}
                            </div>
                            {/* shop-top-bar end */}
                            {/* shop-products-wrapper start */}
                            <div class="shop-products-wrapper">
                                <div class="tab-content">
                                    <div id="grid-view" class="tab-pane fade" role="tabpanel">
                                        <div class="product-area shop-product-area">
                                            <div class="row">
                                                {products.map(function (product, index) {
                                                    return <Productitem product={product} key={index} />
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>

                            {/* shop-products-wrapper end */}
                        </div>
                        <div class="col-lg-3 order-2 order-lg-1">
                           
                           
                            {/*sidebar-categores-box start  */}
                            <div class="sidebar-categores-box">
                                <div class="sidebar-title">
                                    <h2>Filter By</h2>
                                </div>
                              
                                {/* filter-sub-area start */}
                                <ListCategory />
                                {/* filter-sub-area end */}
                               
                                {/* filter-sub-area start */}
                                <div class="filter-sub-area pt-sm-10 pt-xs-10">
                                    <h5 class="filter-sub-titel">Color</h5>
                                    <div class="color-categoriy">
                                        <form action="#">
                                            <ul>
                                                <li><span class="white"></span><a href="#">White (1)</a></li>
                                                <li><span class="black"></span><a href="#">Black (1)</a></li>
                                                <li><span class="Orange"></span><a href="#">Orange (3) </a></li>
                                                <li><span class="Blue"></span><a href="#">Blue  (2) </a></li>
                                            </ul>
                                        </form>
                                    </div>
                                </div>
                                {/* filter-sub-area end */}
                               
                            </div>
                            {/*sidebar-categores-box end  */}
                            
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default ProductCategory;

{/* <section className="maincontent">
                <div className="container my-4">
                    <div className="row">
                        <div className="col-md-3">
                            <ListCategory />
                            <ListBrand />
                        </div>
                        <div className="col-md-9">
                            <h3 className="text-center">{title}</h3>
                            <div className="row">
                                {products.map(function (product, index) {
                                    return <Productitem product={product} key={index} />
                                })}
                            </div>


                        </div>
                    </div>
                </div>
            </section> */}
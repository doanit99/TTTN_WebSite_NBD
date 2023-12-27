import "../../../index.css"
import { useState } from "react";
import ProductService from "../../../services/ProductServices";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Productitem from "../Product/ProductItem";

function ProductHome(props){
    const [products,setProduct]=useState([]);
    useEffect (function(){
        (async function(){
            await ProductService.getProductHome(props.category.id).then(function(result){
                setProduct(result.data);
            });
        })();
    },[props.category.id]);
    
    if(products!=null){
        return(
            <div className="container my-3"  style={{background: '#fff'}}>
            <div className="product-category">
                <h3 className="text-center pt-4" style={{textTransform:'uppercase'}}>{props.category.name}</h3>
                <div className="row" >
                    {products.map(function (product, index) {
                        return <Productitem product={product} key={index}/>
                    })}
    
                </div>
    
                <div className="text-center my-3 pb-3">
                    <Link to={"/danh-muc-san-pham/"+props.category.slug} className="btn btn-success">Xem thêm</Link>
                </div>

                
            </div>
        </div>
        );
    }
    
}

export default ProductHome;

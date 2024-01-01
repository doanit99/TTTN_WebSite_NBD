import CategoryService from "../../../services/CategoryServices";
import ProductHome from "./ProductHome";
import { useEffect, useState } from "react";
import Slider from "../../../layouts/LayoutSite/Slider";

function Home() {
    const [categorys,setCategory]=useState([]);
    useEffect (function(){
        (async function(){
            await CategoryService.getCategoryByParentId(1).then(function(result){
                setCategory(result.data);
            });
        })();
    },[]);

  
    return (
        <>
        <Slider />
        <section className="container-fluid py-4">
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Product List</h2>
    
            <div className="row">
    
                {/* <div className="col-md-3 mb-4">
                    <div className="card">
                        <img src="product1.jpg" className="card-img-top" alt="Product 1"/>
                        <div className="card-body">
                            <h5 className="card-title">Product 1</h5>
                            <p className="card-text">Description of Product 1.</p>
                            <a href="#" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div> */}
    
                {categorys.map(function(category,index){
                return <ProductHome key={index} category={category}/>

           })}
            
    
            </div>

          

        </div>
    </section>
    </>
    )
}
export default Home;
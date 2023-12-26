import CategoryService from "../../../services/CategoryServices";
import ProductHome from "./ProductHome";
import { useEffect, useState } from "react";
function Home() {
    const [categorys,setCategory]=useState([]);
    useEffect (function(){
        (async function(){
            await CategoryService.getCategoryByParentId(0).then(function(result){
                setCategory(result.data.categorys);
            });
        })();
    },[]);

  
    return (
        <section class="container-fluid py-4">
        <div class="container mt-5">
            <h2 class="mb-4 text-center">Product List</h2>
    
            <div class="row">
    
                {/* <div class="col-md-3 mb-4">
                    <div class="card">
                        <img src="product1.jpg" class="card-img-top" alt="Product 1"/>
                        <div class="card-body">
                            <h5 class="card-title">Product 1</h5>
                            <p class="card-text">Description of Product 1.</p>
                            <a href="#" class="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div> */}
    
                {categorys.map(function(category,index){
            return <ProductHome key={index} category={category}/>

           })}
            
    
            </div>

          

        </div>
    </section>
    )
}
export default Home;
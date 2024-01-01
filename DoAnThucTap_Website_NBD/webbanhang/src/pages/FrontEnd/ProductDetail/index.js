import parser from 'html-react-parser';
import { Link, useParams } from "react-router-dom";
import { urlImageFE } from "../../../config";
import { useState } from "react";
import { useEffect } from "react";
import ProductService from '../../../services/ProductServices';

function ProductDetail(){
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    // const [products, setProducts] = useState([]);
    // const [title, setTitle] = useState("");
    
    // document.title = title;
    useEffect(function () {

        (async function () {
            try {
                
                const result = await ProductService.getById(id);
                setProduct(result.data);
                // setProducts(result.product_other);
                // setTitle(result.product.name);
            } catch (error) {
                console.error(error);
            }
        })();

    }, [id]);
    return(
        <section className="maincontent">
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-6">
                       
                        <img src={urlImageFE+"products/"+ product.image} className="img-fluid" alt="hinh san pham"/>
                        
                       
                    </div>
                    <div className="col-md-6">
                        <h2>{product.name}</h2>
                        <div className="row">
                            <div className="col-md-3">
                                <strong className="text-danger fs-4">{product.price}&#x20ab;</strong>
                            </div>
                            {/* <div className="col-md-6 fs-6 pt-2">
                                <del>{product.price}&#x20ab;</del>
                            </div> */}
                        </div>
                        <div className="row">
                            <div className="col-md-12 p-3">Số lượng: {product.qty}</div>
                        </div>
                        <div className="row">
                            <button className="col-md-3 btn btn-info">Thêm vào giỏ hàng</button>
                            <Link to={"/thanh-toan/"+product.id} className='col-md-3'>
                                <button className="btn btn-danger">Mua ngay</button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
                <h2>CHI TIẾT SẢN PHẨM</h2>
                <div className="row">
                    <div className="col-md-12">
                        {parser(`${product.detail}`)}
                    </div>
                </div>
                <h2>SẢN PHẨM LIÊN QUAN</h2>
                <div className="row">
                    
                        {/* {products.map(function(product, index){
                            return (
                                
                            <Productitem product={product} key={index}/>
                           
                            );
                        })} */}
                   
                </div>
            </div>
        </section>
    );
}
export default ProductDetail;
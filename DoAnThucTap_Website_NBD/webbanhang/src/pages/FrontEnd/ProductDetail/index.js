import parser from 'html-react-parser';
import { Link, useParams } from "react-router-dom";
import { urlImageFE } from "../../../config";
import { useState } from "react";
import { useEffect } from "react";
import ProductService from '../../../services/ProductServices';
import { FaStar } from 'react-icons/fa';
function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    // const [products, setProducts] = useState([]);
    // const [title, setTitle] = useState("");
    const [quantity, setQuantity] = useState(1);


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

    const addToCart = () => {
        // Retrieve the existing cart from localStorage or initialize an empty array
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if the product is already in the cart
        const existingProduct = existingCart.find((item) => item.id === product.id);

        if (existingProduct) {
            // If the product is already in the cart, update its quantity
            existingProduct.quantity += quantity;
        } else {
            // If the product is not in the cart, add it
            const newProduct = {
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                quantity: quantity,
            };
            existingCart.push(newProduct);
        }

        // Save the updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(existingCart));

        // You can also provide some feedback to the user, e.g., a toast notification
        alert("Product added to cart!");
    };
    return (

        <>
            <div>
                <div class="container">
                    <div class="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li class="active">Single Product Normal</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="content-wraper">
                <div class="container">
                    <div class="row single-product-area">
                        <div class="col-lg-5 col-md-6">
                            {/* Product Details Left */}
                            <div class="product-details-left">
                                <div class="product-details-images slider-navigation-1">
                                    <div class="lg-image">
                                        <img src={urlImageFE + "products/" + product.image} className="img-fluid" alt="hinh san pham" />
                                    </div>

                                </div>

                            </div>
                            {/*// Product Details Left */}
                        </div>

                        <div class="col-lg-7 col-md-6">
                            <div class="product-details-view-content sp-normal-content pt-60">
                                <div class="product-info">
                                    <h2>{product.name}</h2>
                                    <span class="product-details-ref">Reference: demo_15</span>
                                    <div class="rating-box pt-20">
                                        <ul class="rating rating-with-review-item">
                                            <li><i><FaStar /></i></li>
                                            <li><i><FaStar /></i></li>
                                            <li><i><FaStar /></i></li>
                                            <li class="no-star"> <i><FaStar /></i></li>
                                            <li class="no-star"> <i><FaStar /></i></li>
                                        </ul>
                                    </div>
                                    <div class="price-box pt-20">
                                        <span class="new-price new-price-2">${product.price}</span>
                                    </div>
                                    <div class="product-desc">
                                        <p>
                                            <span>{product.description}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="quantity form-group">
                                        <label htmlFor="quantity">Quantity</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <button className="btn btn-outline-secondary" type="button" onClick={() => setQuantity(Math.max(quantity - 1, 1))}>-</button>
                                            </div>
                                            <input type="text" className="form-control text-center" id="quantity" value={quantity} readOnly />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-secondary" type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>

                                    {/* <div class="single-add-to-cart">
                                        <form action="#" class="cart-quantity">
                                            <div class="quantity">
                                                <label>Quantity</label>
                                                <div class="cart-plus-minus">
                                                {product.qty}
                                                    <input class="cart-plus-minus-box" defaultValue="1" type="text"/>
                                                    <div class="dec qtybutton"><i class="fa fa-angle-down"></i></div>
                                                    <div class="inc qtybutton"><i class="fa fa-angle-up"></i></div>
                                                </div>
                                            </div>
                                            <button class="add-to-cart" type="submit">Add to cart</button>
                                        </form>
                                    </div> */}
                                    <div class="product-additional-info">
                                        <div class="product-social-sharing">
                                            <ul>
                                                <li class="facebook"><a href="#"><i class="fa fa-facebook"></i>Facebook</a></li>
                                                <li class="twitter"><a href="#"><i class="fa fa-twitter"></i>Twitter</a></li>
                                                <li class="google-plus"><a href="#"><i class="fa fa-google-plus"></i>Google +</a></li>
                                                <li class="instagram"><a href="#"><i class="fa fa-instagram"></i>Instagram</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="product-area pt-40">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="li-product-tab">
                                <ul class="nav li-product-menu">
                                    <li><a class="active" data-toggle="tab" href="#description"><span>Description</span></a></li>
                                    <li><a data-toggle="tab" href="#product-details"><span>Product Details</span></a></li>
                                    <li><a data-toggle="tab" href="#reviews"><span>Reviews</span></a></li>
                                </ul>
                            </div>
                            {/* Begin Li's Tab Menu Content Area */}
                        </div>
                    </div>
                    <div class="tab-content">
                        <div id="description" class="tab-pane active show" role="tabpanel">
                            <div class="product-description">
                                <span>The best is yet to come! Give your walls a voice with a framed poster. This aesthethic, optimistic poster will look great in your desk or in an open-space office. Painted wooden frame with passe-partout for more depth.</span>
                            </div>
                        </div>
                        <div id="product-details" class="tab-pane" role="tabpanel">
                            <div class="product-details-manufacturer">
                                <a href="#">
                                    <img src="../frontend/images/product-details/1.jpg" alt="Product Manufacturer Image" />
                                </a>
                                <p><span>Reference</span> demo_7</p>
                                <p><span>Reference</span> demo_7</p>
                            </div>
                        </div>
                        <div id="reviews" class="tab-pane" role="tabpanel">
                            <div class="product-reviews">
                                <div class="product-details-comment-block">
                                    <div class="comment-review">
                                        <span>Grade</span>
                                        <ul class="rating">
                                            <li><i class="fa fa-star-o"></i></li>
                                            <li><i class="fa fa-star-o"></i></li>
                                            <li><i class="fa fa-star-o"></i></li>
                                            <li class="no-star"><i class="fa fa-star-o"></i></li>
                                            <li class="no-star"><i class="fa fa-star-o"></i></li>
                                        </ul>
                                    </div>
                                    <div class="comment-author-infos pt-25">
                                        <span>HTML 5</span>
                                        <em>01-12-18</em>
                                    </div>
                                    <div class="comment-details">
                                        <h4 class="title-block">Demo</h4>
                                        <p>Plaza</p>
                                    </div>
                                    <div class="review-btn">
                                        <a class="review-links" href="#" data-toggle="modal" data-target="#mymodal">Write Your Review!</a>
                                    </div>
                                    {/* Begin Quick View | Modal Area */}
                                    <div class="modal fade modal-wrapper" id="mymodal" >
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <div class="modal-body">
                                                    <h3 class="review-page-title">Write Your Review</h3>
                                                    <div class="modal-inner-area row">
                                                        <div class="col-lg-6">
                                                            <div class="li-review-product">
                                                                <img src="frontend/images/product/large-size/3.jpg" alt="Li's Product" />
                                                                <div class="li-review-product-desc">
                                                                    <p class="li-product-name">Today is a good day Framed poster</p>
                                                                    <p>
                                                                        <span>Beach Camera Exclusive Bundle - Includes Two Samsung Radiant 360 R3 Wi-Fi Bluetooth Speakers. Fill The Entire Room With Exquisite Sound via Ring Radiator Technology. Stream And Control R3 Speakers Wirelessly With Your Smartphone. Sophisticated, Modern Design </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="li-review-content">
                                                                {/* Begin Feedback Area */}
                                                                <div class="feedback-area">
                                                                    <div class="feedback">
                                                                        <h3 class="feedback-title">Our Feedback</h3>
                                                                        <form action="#">
                                                                            <p class="your-opinion">
                                                                                <label>Your Rating</label>
                                                                                <span>
                                                                                    <select class="star-rating">
                                                                                        <option defaultValue="1">1</option>
                                                                                        <option defaultValue="2">2</option>
                                                                                        <option defaultValue="3">3</option>
                                                                                        <option defaultValue="4">4</option>
                                                                                        <option defaultValue="5">5</option>
                                                                                    </select>
                                                                                </span>
                                                                            </p>
                                                                            <p class="feedback-form">
                                                                                <label htmlFor="feedback">Your Review</label>
                                                                                <textarea id="feedback" name="comment" cols="45" rows="8" aria-required="true"></textarea>
                                                                            </p>
                                                                            <div class="feedback-input">
                                                                                <p class="feedback-form-author">
                                                                                    <label htmlFor="author">Name<span class="required">*</span>
                                                                                    </label>
                                                                                    <input id="author" name="author" defaultValue="" size="30" aria-required="true" type="text" />
                                                                                </p>
                                                                                <p class="feedback-form-author feedback-form-email">
                                                                                    <label htmlFor="email">Email<span class="required">*</span>
                                                                                    </label>
                                                                                    <input id="email" name="email" defaultValue="" size="30" aria-required="true" type="text" />
                                                                                    <span class="required"><sub>*</sub> Required fields</span>
                                                                                </p>
                                                                                <div class="feedback-btn pb-15">
                                                                                    <a href="#" class="close" data-dismiss="modal" aria-label="Close">Close</a>
                                                                                    <a href="#">Submit</a>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                                {/* Feedback Area End Here */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Quick View | Modal Area End Here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default ProductDetail;
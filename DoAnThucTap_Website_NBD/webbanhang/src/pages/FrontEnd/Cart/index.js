import React, { useState, useEffect } from "react";
import Checkout from "../Checkout";
import { urlImageFE } from "../../../config";

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const removeItem = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const updateQuantity = (productId, newQuantity) => {
        const updatedCart = cart.map((item) => {
            if (item.id === productId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

    return (
        <>
            {/* Begin Li's Breadcrumb Area */}
            <div>
                <div class="container">
                    <div class="breadcrumb-content">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li class="active">Shoping Cart</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="container mt-4">
                <h2 class="text-black text-center pb-3">Shoping Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>
                                            <img
                                                src={urlImageFE + "products/" + item.image}
                                                alt={item.name}
                                                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                            />
                                        </td>
                                        <td>${item.price.toLocaleString()}</td>
                                        <td class="col-3">
                                            <div class="d-flex align-items-center">
                                                <button
                                                    class="btn btn-outline-secondary btn-sm"
                                                    type="button"
                                                    onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="text"
                                                    class="form-control form-control-sm text-center mx-custom"
                                                    value={item.quantity}
                                                    readOnly
                                                />
                                                <button
                                                    class="btn btn-outline-secondary btn-sm mr-150"
                                                    type="button"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>

                                        <td>${(item.price * item.quantity).toLocaleString()}</td>
                                        <td>
                                            <button
                                                class="btn btn-danger"
                                                onClick={() => removeItem(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-between">
                            <p className="lead text-black font-weight-bold text-right">
                                Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}
                            </p>
                            <button className="btn btn-warning" onClick={clearCart}>
                                Clear Cart
                            </button>
                        </div>

                        <Checkout cart={cart} clearCart={clearCart} totalAmount={cart.reduce((total, item) => total + item.price * item.quantity, 0)} />


                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;

import React, { useState, useEffect } from "react";

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
        <div className="container mt-4">
            <h2 className="text-black">Giỏ hàng</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
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
                                    <td>${item.price.toFixed(2)}</td>
                                    <td className="col-3">
                                        <div className="d-flex align-items-center">
                                            <button
                                                className="btn btn-outline-secondary btn-sm"
                                                type="button"
                                                onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}
                                            >
                                                -
                                            </button>
                                            <input
                                                type="text"
                                                className="form-control form-control-sm text-center mx-1"
                                                value={item.quantity}
                                                readOnly
                                            />
                                            <button
                                                className="btn btn-outline-secondary btn-sm"
                                                type="button"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </td>

                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="lead">
                        Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                    </p>
                    <button className="btn btn-warning" onClick={clearCart}>
                        Clear Cart
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;

import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';

const Checkout = ({ cart, clearCart, totalAmount }) => {
    const [id, setId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        deliveryName: '',
        deliveryPhone: '',
        deliveryAddress: '',
        deliveryGender: '',
        note: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    //
    useEffect(() => {
        // Function to check token status
        const token = Cookies.get('jwtToken');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                const idUser = decoded.Id;
                setId(idUser);

            } catch (error) {
                console.error('Error decoding JWT token:', error);
            }
        }

    }, []);

    const handleCheckout = async () => {
        try {
            if (!formData.deliveryName || !formData.deliveryPhone || !formData.deliveryAddress) {
                throw new Error('Please fill in all required fields.');
              }
              
            if (/^\s*$/.test(formData.deliveryName) || /^\s*$/.test(formData.deliveryPhone) || /^\s*$/.test(formData.deliveryAddress)) {
                throw new Error('Please fill in all required fields with valid values.');
              }
            setLoading(true);

            const response = await fetch('https://localhost:7230/api/Orders/CreateOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    UserId: id,
                    DeliveryName: formData.deliveryName,
                    DeliveryPhone: formData.deliveryPhone,
                    DeliveryAddress: formData.deliveryAddress,
                    DeliveryGender: formData.deliveryGender,
                    Note: formData.note,
                    Total: totalAmount,
                    OrderDetails: cart.map(item => ({
                        ProductId: item.id,
                        Discount: item.discount,
                        Price: item.price,
                        Amount: item.price * item.quantity,
                        Qty: item.quantity,

                    })),
                }),
            });

            if (!response.ok) {
                throw new Error('Error processing order. Please try again.');
            }

            const result = await response.json();
            // Xử lý kết quả từ server (ví dụ: hiển thị thông báo, điều hướng trang, ...)
            console.log(result);
            alert('Thanh toán thành công');
            clearCart();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };



    const handleFormToggle = () => {
        setShowForm(!showForm);
    };
    return (
        <div className="mb-4">
            {/* Button để hiển thị/ẩn form */}
            <button className={`btn ${showForm ? 'btn-danger' : 'btn-success'}`} onClick={handleFormToggle}>
                {showForm ? 'Cancel' : 'Check Out'}
            </button>

            {/* Hiển thị form nếu showForm là true */}
            {showForm && (
                <form className="mt-3">
                    {/* Các trường thông tin đặt hàng */}
                    <div className="mb-3">
                        <label htmlFor="deliveryName" className="form-label">First and last name:</label>
                        <input type="text" className="form-control" id="deliveryName" name="deliveryName" value={formData.deliveryName} onChange={handleInputChange} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="deliveryPhone" className="form-label">Phone:</label>
                        <input type="text" className="form-control" id="deliveryPhone" name="deliveryPhone" value={formData.deliveryPhone} onChange={handleInputChange} minLength={10} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="deliveryAddress" className="form-label">Address:</label>
                        <input type="text" className="form-control" id="deliveryAddress" name="deliveryAddress" value={formData.deliveryAddress} onChange={handleInputChange} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="deliveryGender" className="form-label">Gender:</label>
                        <input type="text" className="form-control" id="deliveryGender" name="deliveryGender" value={formData.deliveryGender} onChange={handleInputChange} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="note" className="form-label">Note:</label>
                        <input type="text" className="form-control" id="note" name="note" value={formData.note} onChange={handleInputChange} required/>
                    </div>
                    {/* Nút thanh toán */}
                    <button type="button" className={`btn ${loading ? 'btn-secondary' : 'btn-primary'}`} onClick={handleCheckout} disabled={loading}>
                        {loading ? 'Đang xử lý...' : 'Pay All'}
                    </button>
                </form>
            )}

            {error && <p className="mt-3" style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Checkout;

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const handleRegister = async () => {
        try {
            // Check if passwords match
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            const response = await axios.post(
                'https://localhost:7230/api/Users/Validate1/RegisterModel',
                {
                    username,
                    email,
                    password,
                    confirmPassword,
                },
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );

            const token = response.data.data;

            if (token) {

                // Chuyển hướng đến một route khác 
                navigate('/login');
                alert('Đăng kí thành công!');

            } else {
                console.error('Token is invalid or not received from the server.');
                alert('Đăng kí thất bại!');
            }

        } catch (error) {
            console.error('Đăng kí thất bại:', error);
            alert('Đăng kí thất bại!');
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="font-weight-bold">Register</h3>
                        </div>
                        <div className="card-body">

                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="far fa-user"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        className="form-control"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="far fa-user"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-lock"></i>
                                        </span>
                                    </div>
                                    <input
                                        type={passwordVisible ? 'text' : 'password'}
                                        placeholder="Enter your Password"
                                        className="form-control"

                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <div className="input-group-append">
                                        <button
                                            className="btn btn-outline-secondary"
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {passwordVisible ? (
                                                <i className="far fa-eye"></i>
                                            ) : (
                                                <i className="far fa-eye-slash"></i>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-lock"></i>
                                        </span>
                                    </div>
                                    <input
                                        type={passwordVisible ? 'text' : 'password'}
                                        placeholder="Enter your Confirm Password"
                                        className="form-control"

                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                    <div className="input-group-append">
                                        <button
                                            className="btn btn-outline-secondary"
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {passwordVisible ? (
                                                <i className="far fa-eye"></i>
                                            ) : (
                                                <i className="far fa-eye-slash"></i>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button
                                className="btn btn-primary btn-block"
                                onClick={handleRegister}>
                                Register
                            </button>

                        </div>
                        <div className="card-footer text-center">
                            <p className="mb-0">
                                You have an account?{' '}
                                <a href="/login" className="font-weight-bold">Sign in</a>
                            </p>
                        </div>
                        <div className="mx-3 my-2 py-2 border-top">
                            <div className="text-center py-3">
                                <a
                                    href="https://wwww.facebook.com"
                                    target="_blank"
                                    className="px-2"
                                >
                                    <img
                                        src="https://www.dpreview.com/files/p/articles/4698742202/facebook.jpeg"
                                        alt=""
                                        className="social-icon rounded-circle"
                                        style={{ width: '30px', height: '30px' }} // Adjust the size as needed
                                    />
                                </a>
                                <a
                                    href="https://www.google.com"
                                    target="_blank"
                                    className="px-2"
                                >
                                    <img
                                        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                                        alt=""
                                        className="social-icon rounded-circle"
                                        style={{ width: '30px', height: '30px' }} // Adjust the size as needed
                                    />
                                </a>
                                <a
                                    href="https://www.github.com"
                                    target="_blank"
                                    className="px-2"
                                >
                                    <img
                                        src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png"
                                        alt=""
                                        className="social-icon rounded-circle"
                                        style={{ width: '30px', height: '30px' }} // Adjust the size as needed
                                    />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default Register;

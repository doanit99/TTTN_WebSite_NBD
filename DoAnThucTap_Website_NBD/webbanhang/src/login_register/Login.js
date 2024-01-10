import axios from 'axios';
import Cookies from 'universal-cookie';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const cookies = new Cookies();
    const handleLogin = async () => {
        try {
            const response = await axios.post(
              'https://localhost:7230/api/Users/Validate/LoginModel',
              {
                username,
                password,
              },
              {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
              }
            );
  
        const token = response.data.data;       

        if (token) {
            
            // Sử dụng js-cookie để lưu trữ token trong cookie 
            cookies.set('jwtToken', token);
            // Chuyển hướng đến một route khác 
            navigate('/');

        } else {
            console.error('Token is invalid or not received from the server.');
            alert('Đăng nhập thành công!');
        }
       
      } catch (error) {
        console.error('Đăng nhập thất bại:', error);
      }
    };
    
    
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="font-weight-bold">Login</h3>
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
                                            placeholder="Username or Email"
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
                                                <i className="fas fa-lock"></i>
                                            </span>
                                        </div>
                                        <input
                                            type="password"
                                            placeholder="Enter your Password"
                                            className="form-control"
                                          
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary" type="button">
                                                <i className="far fa-eye-slash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-check d-flex align-items-center">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        id="remember"
                                        className="form-check-input"
                                    />
                                    <label
                                        htmlFor="remember"
                                        className="form-check-label text-muted"
                                    >
                                        Remember me
                                    </label>
                                    <a
                                        href="#"
                                        id="forgot"
                                        className="ml-auto font-weight-bold"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <button
                                    className="btn btn-primary btn-block"                                
                                    onClick={handleLogin}>
                                    Login
                                </button>
                           
                        </div>
                        <div className="card-footer text-center">
                            <p className="mb-0">
                                Don't have an account?{' '}
                                <a href="#" className="font-weight-bold">Sign up</a>
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

export default Login;

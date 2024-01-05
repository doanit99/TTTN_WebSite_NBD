import React, { useState } from 'react';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      try {
        // Gọi API ở đây và xử lý dữ liệu đăng nhập
        const response = await fetch('URL_API_LOGIN', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });
  
        if (response.ok) {
          // Xử lý khi đăng nhập thành công
          console.log('Login successful');
        } else {
          // Xử lý khi đăng nhập thất bại
          console.error('Login failed');
        }
      } catch (error) {
        console.error('Error:', error);
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
                            <form action="login_script.php" method="POST">
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
                            </form>
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

import './Login.css';

const Login = () => {
    return (
        <div className="container">
            <div className="container_inner">
                <div className="header-block">
                    <div className="prev-icon"/>
                    <div className="header-content">
                        <h1 className="header-title">
                            Welcome!
                        </h1>
                        <p className="header-info_text">Log in to start playing</p>
                    </div>
                </div>
                <div className="body-block">
                    <form className="login-form">
                        <div className="form-inputs">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required/>
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="password">
                                Password
                            </label>
                            <input type="password" id="password" name="password" placeholder="Enter your password" required/>
                        </div>
                        <div className="submit-block">
                            <button type="submit" className="submitBtn">LOGIN</button>
                            <a href='#'>Forgot Password?</a>
                        </div>
                    </form>
                </div>
                <div className="footer-block">
                    <div className="break-lines_block">
                        <hr className="break-line"/>
                        <div className="or-text">or</div>
                        <hr className="break-line"/>
                    </div>
                    <div className="login-info">Log in with</div>
                    <div className="social-medias">
                        <div className="google-icon"/>
                        <div className="facebook-icon"/>
                        <div className="apple-icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="container">
            <div className="container_inner">
                <div className="header-block">
                    <div className="prev-icon"/>
                    <div className="header-content">
                        <h1 className="header-title">
                            Hi!
                        </h1>
                        <p className="header-info_text">Create a new account</p>
                    </div>
                </div>
                <div className="body-block">
                    <form className="login-form">
                        <div className="form-inputs">
                            <label htmlFor="name">
                                Name
                            </label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" required/>
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="email" id="email" name='email' placeholder="Enter your email" required/>
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="password">
                                Password
                            </label>
                            <input type="password" id="password" name='password' placeholder="Enter your password" required/>
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

export default SignUp;
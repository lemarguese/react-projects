import './ForgotPassword.css';

const ForgotPassword = () => {
    return (
        <div className="container">
            <div className="container_inner">
                <div className="header-block">
                    <div className="prev-icon"/>
                    <div className="header-content">
                        <h1 className="header-title">
                            Forgot password?
                        </h1>
                        <p className="header-info_text">Enter your email adress to retrieve your password </p>
                    </div>
                </div>
                <div className="body-block">
                    <form className="login-form">
                        <div className="form-inputs">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="email" id="email" placeholder="Enter your email" required/>
                        </div>
                        <div className="submit-block">
                            <button type="submit" className="submitBtn">Reset password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;
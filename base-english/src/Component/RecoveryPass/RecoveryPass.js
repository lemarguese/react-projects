import './RecoveryPass.css';

const RecoveryPass = () => {
    return (
        <div className="container">
            <div className="container_inner">
                <div className="header-block">
                    <div className="prev-icon"/>
                    <div className="header-content">
                        <h1 className="header-title">
                            New password
                        </h1>
                        <p className="header-info_text">Enter your new password and don’t forget it again</p>
                    </div>
                </div>
                <div className="body-block">
                    <form className="login-form">
                        <div className="form-inputs">
                            <label htmlFor="password">
                                Password
                            </label>
                            <input type="password" id="password" name="password" placeholder="Enter your new password" required/>
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="repeatPassword">
                                Repeat the password
                            </label>
                            <input type="password" id="repeatPassword" name="repeatPass" placeholder="Repeat your new password" required/>
                        </div>
                        <div className="submit-block">
                            <button type="submit" className="submitBtn">RESET PASSWORD</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RecoveryPass;
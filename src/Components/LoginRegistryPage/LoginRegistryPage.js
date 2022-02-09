import './LoginRegistryPage.css';
import {useState} from "react";

const LoginRegistryPage = (props) => {
    return (
        <>
            <div className="Login-background">
                <div className="login-wrap">
                    <div className="logo"/>
                    <form onSubmit={props.submit} className="api-form">
                        <div className="username-input">
                            <h3 className="username-input text">Username</h3>
                            <input type="text" placeholder="Username" className="username-input input"/>
                        </div>
                        <div className="password-input">
                            <input type="checkbox" className="checkbox-input" onChange={props.passHandler}/>
                            <h3 className="password-input text">Password</h3>
                            <input type={props.show ? "text" :"password"} placeholder="Password" className="password-input input"/>
                            <span className={props.show ? "show" : "hide"}/>
                        </div>
                        <button type="submit" className="submit-Btn">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginRegistryPage;
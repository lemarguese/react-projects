import LoginRegistryPage from "./LoginRegistryPage";
import {useDispatch} from 'react-redux';
import {useState} from "react";
import {login} from "../../Reducers/LoginReducer/LoginActions";
import {history} from "../../Reducers/configuration";

const LoginLayout = () => {
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const dispatch = useDispatch();
    const showHideHandler = (e) => {
        console.log(e.target.checked);
        if (e.target.checked) {
            setShow(true);
        }
        setShow(false);
    }
    const usernamePassHandler = (e) => {
        const {name, value} = e.target;
        if (name === "username") {
            setUsername(value);
        } else {
            setPassword(value);
        }
    }

    const submitHandler = () => {
        console.log("here");
        let data = {
            username: username,
            password: password
        }
        // let formData = new FormData();
        // Object.keys(data).forEach(key => {
        //     formData.append(key, data[key]);
        // })
        login(data);
    }

    return (
        <LoginRegistryPage passHandler={(e) => {
            showHideHandler(e)
        }} show={show} userpass={(e) => {
            usernamePassHandler(e)
        }}
                           submit={submitHandler}/>
    )
}

export default LoginLayout;
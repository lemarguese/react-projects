import LoginRegistryPage from "./LoginRegistryPage";
import {useDispatch} from 'react-redux';
import {useState} from "react";

const LoginLayout = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const showHideHandler = (e) => {
        console.log(e.target.checked);
        if (e.target.checked) {
            setShow(true);
        }
        setShow(false);
    }

    const submitHandler = () => {

    }

    return (
        <LoginRegistryPage passHandler = {(e) => {showHideHandler(e)}} show = {show}/>
    )
}

export default LoginLayout;
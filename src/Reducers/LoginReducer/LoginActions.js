import {useDispatch} from "react-redux";
import {push} from 'react-router-redux';
import axios from 'axios';

const dispatch = useDispatch();

export const login = (data) => {
    return async (dispatch) => {
        try {
            await axios.post('http://localhost:8080/users', data);
            dispatch(push("/"));
        } catch (err) {
            console.log(err);
        }
    }


}

export const addDetailsToApplicationInProcess = (data) => {
    return async () => {
        try {
            await axios.post(`/${CONFIG['historyApi']}/event/method/eventupdatebody/`, data)
        } catch(err) {
            console.log(err)
        }
    }
}
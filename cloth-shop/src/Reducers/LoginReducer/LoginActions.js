import {history} from "../configuration";
import instance from "../../Components/baseUrl";

export const login = (data) => {
    return async dispatch => {
        try {
            const response = await instance.post(`/login`, data);
            console.log(response)
            history.push("/");
        } catch (err) {
            console.log(err);
        }
    }


}

// export const addDetailsToApplicationInProcess = (data) => {
//     return async () => {
//         try {
//             await axios.post(`/${CONFIG['historyApi']}/event/method/eventupdatebody/`, data)
//         } catch(err) {
//             console.log(err)
//         }
//     }
// }
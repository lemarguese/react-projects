import instance from "../../Components/baseUrl";
import {BRAND, FOR_WHO, IMAGE, NAME, SIZE} from "./clothesActionTypes";

export const changeImage = (value) => ({type: IMAGE, value});
export const changeBrand = (value) => ({type: BRAND, value});
export const changeName = (value) => ({type: NAME, value});
export const changeSize = (value) => ({type: SIZE, value});
export const changeSex = (value) => ({type: FOR_WHO, value});

export const getAllClothes = () => {
    return async () => {
        try {
            const response = await instance.get("/clothes");
            console.log(response)
            // changeImage(response.data.image);
            // changeBrand(response.data.brand);
            // changeName(response.data.name);
            // changeSex(response.data.forWho);
            // changeSize(response.data.size);
        } catch (err) {
            console.log(err);
        }
    }
}
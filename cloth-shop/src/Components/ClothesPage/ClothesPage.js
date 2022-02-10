import {useEffect} from "react";
import {getAllClothes} from "../../Reducers/ClothesReducer/clothesActions";
import {useSelector} from "react-redux";

const ClothesPage = () => {

    const clothes = useSelector(state => state.clothes);

    useEffect(() => {
        getAllClothes();
        console.log(clothes);
    })

    return (
        <>
            <h1>hello, bro!</h1>
        </>
    )
}

export default ClothesPage;
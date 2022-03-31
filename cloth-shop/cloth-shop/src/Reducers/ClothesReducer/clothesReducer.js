import {SIZE, FOR_WHO, IMAGE, BRAND, NAME} from "./clothesActionTypes";

const initialState = {
    id: 0,
    name: "",
    brand: "",
    image: "",
    size: "",
    forWho: ""
}

const clothesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIZE:
            return {...state, size: action.value}
        case FOR_WHO:
            return {...state, forWho: action.value}
        case IMAGE:
            return {...state, image: action.value}
        case BRAND:
            return {...state, brand: action.value}
        case NAME:
            return {...state, name: action.value}
        default:
            return state;
    }
}

export default clothesReducer;
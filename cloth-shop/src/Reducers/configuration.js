import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import clothesReducer from "./ClothesReducer/clothesReducer";
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from "history";
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = compose;
export const history = createBrowserHistory();

const rootReducer = combineReducers({
    clothes: clothesReducer,
    router: connectRouter(history)
});

const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
];

const saveToLocalStorage = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.log('Error save state');
    }
};

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};
const enhancers = composeEnhancers(applyMiddleware(...middleware));
const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
    saveToLocalStorage({
        clothes: {
            ...store.getState()
        },
    })
});

export default store;
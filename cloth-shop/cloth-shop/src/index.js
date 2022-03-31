import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./Reducers/configuration";
import {history} from "./Reducers/configuration";
import {Router} from "react-router";

const app = (
    <Provider store={store}>
        <Router navigator={history} location={history.location}>
            <App/>
        </Router>
    </Provider>
)

ReactDOM.render(
    app,
  document.getElementById('root')
);
reportWebVitals();

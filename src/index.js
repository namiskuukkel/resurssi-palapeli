import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//Kun kutsutaan default exportia, voidaan jättää {} pois, ja käyttää mitä tahansa nimeä
import App from './App';
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
//Muuta kuin default exportia importatessa täytyy käyttää {} ja nimen täytyy vastata exportin nimeä
import { Provider } from 'react-redux'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
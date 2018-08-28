import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'


ReactDOM.render(

        <App />
    ,
    document.getElementById('root'));
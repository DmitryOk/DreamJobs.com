import App from './src/app';
import {hydrate} from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore();

hydrate(

   <Provider store={store}>
        <App/>   
   </Provider> 
    
,document.getElementById('root'));


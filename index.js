import App from './src/app';
import {hydrate} from 'react-dom';
import React from 'react';
import {Provider,connect} from 'react-redux';
import store from './src/store/store'

const AppConnect = connect((state) => {
   console.log(state);
   return state;
})(App);


hydrate(

   <Provider store={store}>
        <AppConnect/>   
   </Provider> 
    
,document.getElementById('root'));


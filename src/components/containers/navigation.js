import {BrowserRouter as Router,Link,Switch,Route,Redirect} from 'react-router-dom';
import React from 'react';

import * as Routes from '../../constants/routes';

import Main from '../pages/main';
import AboutContact from '../pages/aboutContacts';
import LoginForm from '../pages/loginForm';
import RestorePassword from '../pages/restorePassword';
import RegisterForm from '../pages/registrationForm';



const Navigation = () =>{
    return (
    <Router>
        <header>
            <ul>  
                <li><Link to={Routes.MAIN_PAGE}>Main page</Link></li>   
                <li><Link to={Routes.ABOUT_CONTACTS}>Contacts</Link></li>   
                <li><Link to={Routes.LOGIN_FORM}>Log-in/Register</Link></li> 
            </ul>
        </header>
            <Route exact path={Routes.MAIN_PAGE} component = {()=><Main/>}></Route>        
            <Route exact path={Routes.ABOUT_CONTACTS} component = {()=><AboutContact/>}></Route>     
            <Route exact path={Routes.LOGIN_FORM} component = {()=><LoginForm/>}></Route>          
            <Route exact path={Routes.RESTORE_PASSWORD} component = {()=><RestorePassword/>}></Route>
            <Route exact path={Routes.REGISTER_FORM} component = {()=><RegisterForm/>}></Route>       
    </Router>
    );
}

export default Navigation;




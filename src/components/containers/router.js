import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import React from 'react';
import Main from '../pages/main';


const Navigation = () =>{
    return (
    <Router>  
        <ul>  
            <li><Link to='/'>Main page</Link></li>   
            <li><Link to="#">Contacts</Link></li>   
            <li><Link to="#">Log-in/Register</Link></li>   
        </ul>

        <Switch>
            <Route exact path="/">
                <Main/>    
            </Route>  
        </Switch>

    </Router>
    );
}

export default Navigation;




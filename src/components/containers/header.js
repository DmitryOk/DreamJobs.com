import React from 'react';
import Navigation from './router';
import {withRouter} from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <Navigation/>
        </header>
    );
}

export default Header;
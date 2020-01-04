import React from 'react';
import {Link} from 'react-router-dom';
import {REGISTER_FORM,RESTORE_PASSWORD} from '../../constants/routes';


const LoginForm = () => {
    return (
        <div>
            <form>
                <input type='text' required name="LogIn"/>
                <input type ='password' required name='Pasword'/>
                <button type = "submit">Ok</button>
            </form>
                    <Link to={REGISTER_FORM}>Not registered yet ?</Link>
                    <Link to={RESTORE_PASSWORD}>Forgot Password ?</Link>   
        </div>
    );
}
export default LoginForm;
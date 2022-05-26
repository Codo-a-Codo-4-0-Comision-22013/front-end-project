import React from 'react';
import { useFormInput } from '../utils/forms';
import { URL } from '../../constant';
import { languages } from '../../language';
import './login.css';
import Login from './login';
import Profile from '../profile/profile';

export default class ControLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedin: false,
        };
    }

    render() {
        return (false? <Profile/> : <Login/>);
    }
  

}


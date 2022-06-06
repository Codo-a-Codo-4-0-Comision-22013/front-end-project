import React from 'react';
import { useFormInput } from '../utils/forms';
import { URL } from '../../constant';
import { languages } from '../../language';
import './login.css';
import Login from './login';
import AuthenticatedUserApp from './login';
import Profile from '../profile/profile';
import SocialLogin from './socialLogin';

export default class ControLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedin: false,
            user: null
        };
    }

    setUser( newUser ) {
        this.setState({
            isLoggedin: true,
            user: newUser
        });
    }

    render() {
        return (this.isLoggedin? <AuthenticatedUserApp user={this.user}/> : 
        <div>
            <Login onSuccess={this.setUser}/>
            <hr></hr>
            <SocialLogin/>
        </div>
        );
    }

};


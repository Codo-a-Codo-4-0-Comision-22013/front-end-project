import { useFormInput } from '../utils/forms';
import { URL } from '../../constant';
import './login.css';

function Login(props){
    
    const username = useFormInput('');
    const password = useFormInput('');

    function handleSubmit(){

        let jsonData = {
            "username": username.value,
            "password": password.value
        };

        const options = {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData)
        };

        fetch(URL, options)
            .then(response => response.json())
            .then(json => {
                console.log(json)
            });     
    }

    return (
        <div className="login">
            <div className="login-header">
                <div className="login-header-logo">
                    <label>Username</label>
                    <input {...username}></input><br></br>
                    <label>Password</label>
                    <input type="password" {...password}></input><br></br>
                    <button onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    );
}


export default Login;
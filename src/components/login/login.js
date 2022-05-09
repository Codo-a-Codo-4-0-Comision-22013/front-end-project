import { useFormInput } from '../utils/forms';
import { URL } from '../../constant';
import { languages } from '../../language';
import './login.css';

function Login(props) {

    const username = useFormInput('');
    const password = useFormInput('');
    const _language  = languages['en'];

    function handleSubmit() {

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
                <h2>{_language.LOGIN.HEADING_LOGIN}</h2>
                <div className="login-header-logo">
                    <label>Username</label>
                    <input {...username} placeholder={_language.LOGIN.INPUT_PLACEHOLDER_EMAIL}></input><br></br>
                    <label>Password</label>
                    <input type="password" {...password} placeholder={_language.LOGIN.INPUT_PLACEHOLDER_PASS}></input><br></br>
                    <button onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    );
}


export default Login;
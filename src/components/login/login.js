import { useFormInput } from '../utils/forms';
import { URL } from '../../constant';
import { languages } from '../../language';
import { app } from '../../firebase/firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './login.css';
import { useEffect } from 'react';

function Login(callBack) {

    const username = useFormInput('');
    const password = useFormInput('');
    const _language  = languages['en'];
    const isDarkMode = !true; // podemos usar context 

    console.log(app);

    async function handleSubmit(event) {
        event.preventDefault();
        let jsonData = {
            "username": username.value,
            "password": password.value
        };

        console.log(app);

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData)
        };

        const auth = getAuth();
        const user = await signInWithEmailAndPassword(auth, username.value, password.value)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            //callBack(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
        

        /*fetch(URL, options)
            .then(response => response.json())
            .then(json => {
                console.log(json)
            });*/
    }

    return (
        <div className={ isDarkMode? "login dark" : "login light"}>
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


export const AuthenticatedUserApp = ( {user}) => {
    return (
        <div>
            <h1> You're logged as {user.displayName}</h1>
            <code>
                <pre>
                    {JSON.stringify(user, null, 2)}
                </pre>
            </code>
        </div>
    );
};

export default Login;
import './login.css';

function Login(props){
    function handleSubmit(jsonData){

        const options = {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData)
        };

        fetch('https://jsonplaceholder.typicode.com/login', options)
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
                    <input></input><br></br>
                    <label>Password</label>
                    <input type="password"></input><br></br>
                    <button onClick={console.log('Lllamada a donde...')}>Login</button>
                </div>
            </div>
        </div>
    );
}


export default Login;
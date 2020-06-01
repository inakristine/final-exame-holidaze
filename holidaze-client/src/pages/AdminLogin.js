import React, { useState } from 'react';





export default function AdminLogin() {
    let passWord = localStorage.getItem('password')
    let userName = localStorage.getItem('username')

    let [username, setUsername] = useState(userName);
    let [password, setPassword] = useState(passWord);
    let [usernameInput, setUsernameInput] = useState("");
    let [passwordInput, setPasswordInput] = useState("");
    let [loginstatus, setLoginstatus] = useState(false);
    let [errorMessage, setErrorMessage] = useState("");


    let props = loginstatus;

    

    console.log(userName);
    console.log(passWord);

    const handleChange = (input) => {
        let name = input.target.name;
        let value = input.target.value;

        switch (name) {
            case 'username': setUsernameInput(value);
                break;
            case 'password': setPasswordInput(value);
                break;
            default:
        }
        console.log(usernameInput);
        console.log(passwordInput);
    }
    let tryOver = <p className='bookingContainer__errorMessage'>You typed the wrong thing</p>
    const handleSubmit = (e) => {
        e.preventDefault();
            (usernameInput === username && passwordInput === password) ?  ( setLoginstatus(true) ) : console.log('misslykkes');
            
    }

    const logOutHandler = () => {
        setLoginstatus(false);
    }

    console.log(loginstatus);

    return <div>{(loginstatus && <div className='admincontainer'>
    <h1>Admin dashboard:</h1>
    <div className='dashboard'>

        <div className='dashboard__messages'>
        </div>

        <div className='dashboard__bookings'>
        </div>

        <div className='dashboard__listings'>
        </div>
        <button
            className='btn'
            onClick={logOutHandler}>Log Out
            </button>
    </div>
</div>) || <div className='admincontainer'>
<h1>Login</h1>
<p>{errorMessage}</p>

<form onSubmit={handleSubmit}>
    <p>Enter a username</p>
    <input type='text'
        name='username'
        onChange={handleChange}
    />
    <br />
    <p>Enter a username</p>
    <input type='password'
        name='password'
        onChange={handleChange}
    />
    <br />
    <input type='submit' className='btn' />
</form>
</div>}</div>;


    
    
}
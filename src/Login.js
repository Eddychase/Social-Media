import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const LoginToApp = (e) => {
        e.preventDefault();
    };
    const register = () => { };
    return (
        <div className='login'>
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0vks" alt="" />
            <form>
                <input
                    value={name}
                    onChange={setName(e.target.value)}
                    placeholder=' Full Name (required if registering'
                    type='text' />

                <input placeholder='profile pic (optional)' type='text' />
                <input
                    value={email}
                    onChange={setEmail(e.target.value)}
                    placeholder='Email'
                    type='email' />
                <input
                    value={password}
                    onChange={setPassword(e.target.value)}
                    placeholder='Password'
                    type='password' />
                <button type='submit' onClick={LoginToApp} >Sign In</button>
            </form>

            <p>Not a member?{" "}
                <span classname='login_register' onClick={register}>Register Here</span>
            </p>
        </div>
    );
}

export default Login;

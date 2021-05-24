import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './Login.css'
import { auth } from './Firebase';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const LoginToApp = (e) => {
        e.preventDefault();
    };
    const register = () => {
        if (!name) {
            return alert('please enter FullName');
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoUrl: profilePic,
                    })
                    .then(() => {
                        dispatch(Login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profilePic,
                        })
                        );
                    })
            }).catch((error) => alert(error.message));
    };
    return (
        <div className='login'>
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0vks" alt="" />
            <form>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=' Full Name (required if registering'
                    type='text' />

                <input
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                    placeholder='profile pic (optional)' type='text' />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    type='email' />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    type='password' />
                <button type='submit' onClick={LoginToApp} >Sign In</button>
            </form>

            <p>Not a member?{" "}
                <span classname='login_register' onClick={register}> Register Here</span>
            </p>
        </div>
    );
}

export default Login;

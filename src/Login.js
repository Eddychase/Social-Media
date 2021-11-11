import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import './Login.css'
import { auth } from './Firebase';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    const LoginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                }))
            }).catch((error) => alert(error));
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
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profilePic,
                        })
                        );
                    })
            }).catch(error => alert(error));
    };
    return (
        <div className='login'>
            <form>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=' Full Name (required if registering'
                    type='text'
                />

                <input
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                    placeholder='profile pic (optional)'
                    type='text'

                />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    type='email'
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    type='password'
                />
                <button type='submit' onClick={LoginToApp} >Sign In</button>
            </form>

            <p>Not a member?{" "}
                <span className='login_register' onClick={register}> Register Here</span>
            </p>
        </div>
    );
}

export default Login;

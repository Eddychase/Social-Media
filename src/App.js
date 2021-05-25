import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import './App.css';
import Header from './Header';
import Sidebar from './sidebar';
import Feed from './Feed';
import Login from './Login';
import { auth } from './Firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="App">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className='app_body'>
          <Sidebar />
          <Feed />
          {/*widgets*/}
        </div>
      )}
    </div>

  );
}

export default App;

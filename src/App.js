import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './App.css';
import Header from './Header';
import Sidebar from './sidebar';
import Feed from './Feed';
import Login from './Login';

function App() {
  const user = useSelector(selectUser)
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

import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="App">
      <Header />


      {/*App Body*/}
      <div className='app_body'>
        <Sidebar />
        <Feed />
        {/*widgets*/}
      </div>
    </div>
  );
}

export default App;

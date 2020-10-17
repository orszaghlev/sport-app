import React from 'react';
import './App.css';
import UserComponent from './components/UserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent/>
        <div className="App">
          <UserComponent />
        </div>
      <FooterComponent/>
    </div>
  );
}

export default App;

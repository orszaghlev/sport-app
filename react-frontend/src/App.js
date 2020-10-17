import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import UserComponent from './components/UserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateUserComponent from './components/CreateUserComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
                <Switch>
                  <Route path = "/" exact component = {UserComponent}></Route>
                  <Route path = "/users" component = {UserComponent}></Route>
                  <Route path = "/add-user" component = {CreateUserComponent}></Route>
                </Switch>
            </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;

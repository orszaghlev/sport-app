import React, {Component} from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import AuthService from './services/AuthService.js';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import HomeComponent from './components/HomeComponent';
import ProfileComponent from './components/ProfileComponent';
import BoardAdminComponent from './components/BoardAdminComponent';
import MatchComponent from './components/MatchComponent';
import CreateMatchComponent from './components/CreateMatchComponent';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const {currentUser, showAdminBoard} = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Team Sport App
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a href={"https://trello.com/b/e1oxD2CF/sport-app-project"} className="nav-link">
                Trello
              </a>
            </li>
            <li className="nav-item">
              <a href={"https://github.com/whoiszorz/sport-app"} className="nav-link">
                GitHub
              </a>
            </li>

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/add-match"} className="nav-link">
                  Add Match
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to ={"/user"} className="nav-link">
                  Matches
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  Logout
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={HomeComponent} />
            <Route exact path="/login" component={LoginComponent} />
            <Route exact path="/register" component={RegisterComponent} />
            <Route exact path="/profile" component={ProfileComponent} />
            <Route path="/admin" component={BoardAdminComponent} />
            <Route path="/add-match" component={CreateMatchComponent}></Route>
            <Route path="/user" component={MatchComponent} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

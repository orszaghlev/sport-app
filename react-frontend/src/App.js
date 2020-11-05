import React, {Component} from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import AuthService from './services/AuthService.js';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import HomeComponent from './components/HomeComponent';
import ProfileComponent from './components/ProfileComponent';
import MatchComponent from './components/MatchComponent';
import AdminMatchComponent from './components/AdminMatchComponent';
import CreateMatchComponent from './components/CreateMatchComponent';
import CreateTeamComponent from './components/CreateTeamComponent';
import CreateSeasonComponent from './components/CreateSeasonComponent';
import CreateCompetitionComponent from './components/CreateCompetitionComponent';
import ViewMatchComponent from './components/ViewMatchComponent';
import ViewTeamComponent from './components/ViewTeamComponent';
import ViewSeasonComponent from './components/ViewSeasonComponent';
import ViewCompetitionComponent from './components/ViewCompetitionComponent';
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
        <style>{'body { background-color: #F4F7F9; }'}</style>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Sport App
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
                <Link to={"/events-admin"} className="nav-link">
                  Events (as Admin)
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to ={"/events"} className="nav-link">
                  Events
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
            <Route path="/add-match/:id" component={CreateMatchComponent}></Route>
            <Route path="/add-team/:id" component={CreateTeamComponent}></Route>
            <Route path="/add-season/:id" component={CreateSeasonComponent}></Route>
            <Route path="/add-competition/:id" component={CreateCompetitionComponent}></Route>
            <Route path="/view-match/:id" component={ViewMatchComponent}></Route>
            <Route path="/view-team/:id" component={ViewTeamComponent}></Route>
            <Route path="/view-season/:id" component={ViewSeasonComponent}></Route>
            <Route path="/view-competition/:id" component={ViewCompetitionComponent}></Route>
            <Route path="/events" component={MatchComponent} />
            <Route path="/events-admin" component={AdminMatchComponent}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

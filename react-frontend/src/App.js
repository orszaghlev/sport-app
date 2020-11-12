import React, {Component} from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import AuthService from './services/AuthService.js';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import HomeComponent from './components/HomeComponent';
import ProfileComponent from './components/ProfileComponent';
import MatchComponent from './components/MatchComponent';
import TeamComponent from './components/TeamComponent';
import SeasonComponent from './components/SeasonComponent';
import CompetitionComponent from './components/CompetitionComponent';
import AdminMatchComponent from './components/AdminMatchComponent';
import AdminTeamComponent from './components/AdminTeamComponent';
import AdminSeasonComponent from './components/AdminSeasonComponent';
import AdminCompetitionComponent from './components/AdminCompetitionComponent';
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
                <Link to={"/matches-admin"} className="nav-link">
                  Matches (A)
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to ={"/matches"} className="nav-link">
                  Matches
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/teams-admin"} className="nav-link">
                  Teams (A)
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to ={"/teams"} className="nav-link">
                  Teams
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/seasons-admin"} className="nav-link">
                  Seasons (A)
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to ={"/seasons"} className="nav-link">
                  Seasons
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/competitions-admin"} className="nav-link">
                  Competitions (A)
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to ={"/competitions"} className="nav-link">
                  Competitions
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
            <Route path="/matches" component={MatchComponent} />
            <Route path="/teams" component={TeamComponent} />
            <Route path="/seasons" component={SeasonComponent} />
            <Route path="/competitions" component={CompetitionComponent} />
            <Route path="/matches-admin" component={AdminMatchComponent}/>
            <Route path="/teams-admin" component={AdminTeamComponent}/>
            <Route path="/seasons-admin" component={AdminSeasonComponent}/>
            <Route path="/competitions-admin" component={AdminCompetitionComponent}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

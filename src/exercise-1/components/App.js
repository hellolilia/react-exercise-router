import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Link, NavLink, Route} from 'react-router-dom';
import Home from "./home/Home";
import MyProfile from "./myProfile/MyProfile";
import AboutUs from "./aboutUs/AboutUs";


class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
            <header>
                <ul>
                    <li><Link to='/about-us'>About Us</Link></li>
                    <li><Link to='/my-profile'>My Profile</Link></li>
                    <li><Link to='/'>Home</Link></li>
                </ul>
            </header>
            <switch>
              <Route exact path='/' component={Home} />
              <Route path='/my-profile' component={MyProfile} />
              <Route path='/about-us' component={AboutUs} />
            </switch>
        </Router>
      </div>

    );
  }
}

export default App;

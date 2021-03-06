import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import MyProfile from "./MyProfile";
import AboutUs from "./AboutUs";
import Products from "./Products"
import ProductDetails from "./ProductDetails"
import {Redirect} from "react-router";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
            <header>
                <ul>
                    <li><NavLink to="/about-us" activeClassName="active">About Us</NavLink></li>
                    <li><NavLink to="/my-profile" activeClassName="active">My Profile</NavLink></li>
                    <li><NavLink to='/products' activeClassName="active">Products</NavLink></li>
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                </ul>
            </header>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/my-profile' component={MyProfile} />
              <Route path='/about-us' component={AboutUs} />
              <Route exact path='/products' component={Products} />
              <Route path='/products/:id' component={ProductDetails} />
              <Redirect from='/goods' to='/products' />
              <Redirect to='/' />
            </Switch>
        </Router>
      </div>

    );
  }
}

export default App;

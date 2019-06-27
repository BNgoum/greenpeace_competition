import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.scss';

import Signup from './Components/Slideshow/SignUp';
import Slideshow from './Pages/Slideshow';
import LandingPage from './Pages/LandingPage';
import ActionPage from './Pages/Action';
import Home from './Components/Home/Home';
import Defi from './Components/Defi/Defi';
import Success from './Components/Defi/Success';
import Signatures from './Components/Defi/Signatures';
import Register from './Components/Defi/Register';

function Index() {
    return <LandingPage />;
  }
  
function Action() {
    return <ActionPage />;
}

function SlideshowScreen() {
    return <Slideshow />;
}

function AppRouter() {
    return (
      <Router>
        <div className="gp_wrapper">
          <nav hidden>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/action/">Action</Link>
              </li>
              <li>
                <Link to="/slideshow/">Slideshow</Link>
              </li>
            </ul>
          </nav>
  
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/signup/" component={Signup} />
            <Route path="/action/" component={Action} />
            <Route path="/slideshow/" component={SlideshowScreen} />
            <Route path="/home/" component={Home} />
            <Route path="/defi/" component={Defi} />
            <Route path="/success/" component={Success} />
            <Route path="/signatures/" component={Signatures} />
            <Route path="/register/" component={Register} />
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default AppRouter;

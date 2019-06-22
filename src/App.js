import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.scss';

import Signup from './Components/Slideshow/SignUp';
import Slideshow from './Pages/Slideshow';
import ActionPage from './Pages/Action';

function Index() {
    return <Slideshow />;
  }
  
function Action() {
    return <ActionPage />;
}

// function Users() {
//     return <h2>Users</h2>;
// }

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
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>
  
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/signup/" component={Signup} />
            <Route path="/action/" component={Action} />
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default AppRouter;

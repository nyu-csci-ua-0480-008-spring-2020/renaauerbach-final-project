import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './assets/css/style.css';
import routes from './server/routes/routes';

import App from './App';

ReactDOM.render(
   <Router>
      <Switch>
         {routes.map((route, index) => (
            <Route
               key={index}
               path={route.path}
               exact={route.exact}
               render={props => <App view={route.view} />}
            />
         ))}
         {/* <div id="account"> */}
         {/* TODO: CONDITIONAL FOR LOGIN/LOGOUT */}
         {/*    <Route path="/join" render={props => <App view={<Signup />} />} /> */}
         {/* </div> */}
      </Switch>
   </Router>,
   document.getElementById('root')
);

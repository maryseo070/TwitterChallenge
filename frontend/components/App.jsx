import React from 'react';
import { Route } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { SessionFormContainer } from './session/login_form_container';
import Main from './main/main_container';
import { SignUpFormContainer } from './session/signup_form_container';
import Home from './home/home'
const App = () => {
  return (
    <div>
      <ProtectedRoute exact path='/main' component={ Main } />
      <AuthRoute exact path='/session' component={ Home } />
    </div>
  );
};

export default App;

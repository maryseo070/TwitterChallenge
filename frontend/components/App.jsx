import React from 'react';
import { Route } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { SessionFormContainer } from './session/login_form_container';
import Main from './main/main_container';
import { SignUpFormContainer } from './session/signup_form_container';
import HomeContainer from './home/home_container';

const App = () => {
  return (
    <div>
      <ProtectedRoute exact path='/main' component={ Main } />
      <Route exact path='/session' component={ HomeContainer } />
    </div>
  );
};

export default App;

import React from 'react';
import { Route } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {SessionFormContainer} from './session/login_form_container';
import Main from './main/main';

const App = () => {
  return (
    <div>
      <Route exact path='/' component={Main} />
      <AuthRoute exact path='/login' component={SessionFormContainer} />
    </div>
  );
};

export default App;

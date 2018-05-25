import { SessionFormContainer } from '../session/login_form_container';
import { SignUpFormContainer } from '../session/signup_form_container';
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      Log In to Access Tweets!
      <SessionFormContainer />
      <br>
      </br>
      Don't have an account? Sign Up!
      <SignUpFormContainer />
    </div>
  );
};

export default Home;

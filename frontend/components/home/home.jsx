import { SessionFormContainer } from '../session/login_form_container';
import { SignUpFormContainer } from '../session/signup_form_container';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Footer from './footer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.renderErrors = this.renderErrors.bind(this);
  }


  renderErrors() {
      return(
        <ul className="session-errors">
          {this.props.errors.map((error, i) => (
            <li className="rendered-errors" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }

  render() {
    return (
        <div className="session-page">
          <div className="bluespace"></div>

          <div className="session-welcome">
            <h1 className="welcome">Welcome!</h1>
            <img
              className="twit-pic"
              src="https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png">
            </img>
            {this.renderErrors()}
            Log In to Access Tweets!
            <SessionFormContainer />
            <br>
            </br>
            Don't have an account? Sign Up!
            <SignUpFormContainer />
            <Footer />
          </div>
        </div>
    );
  }
}

Home.propTyoe = {
  errors: PropTypes.array
};

Home.defaultProps = {
  errors: []
};



export default Home;

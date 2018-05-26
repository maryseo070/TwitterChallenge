import { SessionFormContainer } from '../session/login_form_container';
import { SignUpFormContainer } from '../session/signup_form_container';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super(props);
    this.renderErrors = this.renderErrors.bind(this);
  }


  renderErrors() {
      return(
        <ul>
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
      <div>
        <h1>Welcome!</h1>
        {this.renderErrors()}
        Log In to Access Tweets!
        <SessionFormContainer />
        <br>
        </br>
        Don't have an account? Sign Up!
        <SignUpFormContainer />
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

import React from 'react';
import Home from './home';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const msp = state => {
  return {
    errors: state.sessionErrors
  };
};

export default withRouter(connect(msp, null)(Home));

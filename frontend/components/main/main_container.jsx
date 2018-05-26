import React from 'react';
import { connect } from 'react-redux';
import Main from './main';
import { searchHandles } from '../../actions/client_actions';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
const msp = state => {
  return {
    tweets: Object.values(state.tweets),
    currentUser: state.session.currentUser
  };
};

const mdp = dispatch => {
  return {
    searchHandles: (handle) => dispatch(searchHandles(handle)),
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(msp, mdp)(Main));

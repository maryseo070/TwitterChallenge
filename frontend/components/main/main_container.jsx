import React from 'react';
import { connect } from 'react-redux';
import Main from './main';
import { searchHandles } from '../../actions/client_actions';
import { logout } from '../../actions/session_actions';

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

export default connect(msp, mdp)(Main);

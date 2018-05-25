import React from 'react';
import { connect } from 'react-redux';
import Main from './main';
import { searchHandles } from '../../actions/client_actions';

const msp = state => {
  return {
    tweets: state.tweets
  };
};

const mdp = dispatch => {
  return {
    searchHandles: (handle) => dispatch(searchHandles(handle))
  };
};

export default connect(msp, mdp)(Main);

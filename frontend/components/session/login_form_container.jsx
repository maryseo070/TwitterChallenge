import React from 'react';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { connect } from 'react-redux';

const msp = state => {
  return {
    errors: state.errors
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export const SessionFormContainer = connect(msp, mdp)(SessionForm);

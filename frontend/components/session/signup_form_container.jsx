import React from 'react';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { connect } from 'react-redux';

const msp = state => {
  return {
    errors: state.sessionErrors
  };
};

const mdp = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export const SignUpFormContainer = connect(msp, mdp)(SessionForm);

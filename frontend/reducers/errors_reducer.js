import { RECEIVE_TWITTER_ERRORS } from '../actions/client_actions';

const twitterErrorsReducer = (state = [], action) => {
  const defaultErrors = [];
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TWITTER_ERRORS:
      return action.errors.responseJSON;
    default:
      return defaultErrors;
  }
};

export default twitterErrorsReducer;

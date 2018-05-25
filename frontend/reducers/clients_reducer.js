import { RECEIVE_TWEETS } from '../actions/client_actions';
import { merge } from 'lodash';

const clientsReducer = (state = {} , action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TWEETS:
      return action.tweets;
    default:
      return state;
  }
};

export default clientsReducer;

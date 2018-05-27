import {combineReducers} from 'redux';
// import errorsReducer from './errors_reducer';
import sessionsReducer from './sessions_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import clientsReducer from './clients_reducer';
import twitterErrorsReducer from './errors_Reducer';

const rootReducer = combineReducers({
  session: sessionsReducer,
  sessionErrors: sessionErrorsReducer,
  tweets: clientsReducer,
  errors: twitterErrorsReducer
});

export default rootReducer;

import {combineReducers} from 'redux';
// import errorsReducer from './errors_reducer';
import sessionsReducer from './sessions_reducer';
import sessionErrorsReducer from './session_errors_reducer';

const rootReducer = combineReducers({
  session: sessionsReducer,
  sessionErrors: sessionErrorsReducer
});

export default rootReducer;

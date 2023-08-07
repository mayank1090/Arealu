// reducers/index.js
import { combineReducers } from 'redux';
import questionnaireReducer from './questionnaireReducer';

const rootReducer = combineReducers({
  questionnaire: questionnaireReducer,
  // other reducers...
});

export default rootReducer;

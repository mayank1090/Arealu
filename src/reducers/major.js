// reducers/major.js
import { combineReducers } from 'redux';
import questionnaireReducer from './questionnaireReducer';
import imageReducer from './selfieimagereducer';

const rootReducer = combineReducers({
  // questionnaire: questionnaireReducer,
  selfieImages:imageReducer,

  // other reducers...
});

export default rootReducer;



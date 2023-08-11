// reducers/major.js
import { combineReducers } from 'redux';
import questionnaireReducer from "./questionnaireReducer"
import imageReducer from './selfieimagereducer';
import loginquestionReducer from './loginquestionreducer';

const rootReducer = combineReducers({
  // questionnaire: questionnaireReducer,
  selfieImages:imageReducer,
  questionnaire: questionnaireReducer,
  loginquestioner:loginquestionReducer,

  // other reducers...
});

export default rootReducer;



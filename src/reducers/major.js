// reducers/major.js
import { combineReducers } from 'redux';
import questionnaireReducer from "./questionnaireReducer"
import imageReducer from './selfieimagereducer';
import loginquestionReducer from './loginquestionreducer';
import loginotpreducer from './loginotpreducer';

const rootReducer = combineReducers({
  // questionnaire: questionnaireReducer,
  selfieImages:imageReducer,
  questionnaire: questionnaireReducer,
  loginquestioner:loginquestionReducer,
  loginotp:loginotpreducer,

  // other reducers...
});

export default rootReducer;



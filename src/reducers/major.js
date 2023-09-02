// reducers/major.js
import { combineReducers } from "redux";
import questionnaireReducer from "./questionnaireReducer";
import imageReducer from "./selfieimagereducer";
import loginquestionReducer from "./loginquestionreducer";
import loginotpreducer from "./loginotpreducer";
import questionapidatareducer from "./questionapidatareducer";
import progressReducer from "./progressreducer";

const rootReducer = combineReducers({
  selfieImages: imageReducer,
  questionnaire: questionnaireReducer,
  loginquestioner: loginquestionReducer,
  loginotp: loginotpreducer,
  questiondataapi: questionapidatareducer,
  progress: progressReducer

  // other reducers...
});

export default rootReducer;

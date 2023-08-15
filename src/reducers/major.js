// reducers/major.js
import { combineReducers } from "redux";
import questionnaireReducer from "./questionnaireReducer";
import imageReducer from "./selfieimagereducer";
import loginquestionReducer from "./loginquestionreducer";
import loginotpreducer from "./loginotpreducer";
import questionapidatareducer from "./questionapidatareducer";

const rootReducer = combineReducers({
  selfieImages: imageReducer,
  questionnaire: questionnaireReducer,
  loginquestioner: loginquestionReducer,
  loginotp: loginotpreducer,
  questiondataapi: questionapidatareducer,

  // other reducers...
});

export default rootReducer;

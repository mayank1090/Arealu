// reducers/questionnaireReducer.js
import { SET_ANSWER } from '../actions/types';

const initialState = {};

const questionnaireReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANSWER:
      return {
        ...state,
        [action.payload.questionId]: action.payload.answer,
      };
    default:
      return state;
  }
};

export default questionnaireReducer;

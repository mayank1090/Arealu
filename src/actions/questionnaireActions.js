// actions/questionnaireActions.js
import { SET_ANSWER } from './types';

export const setAnswer = (questionId, answer) => {
  return {
    type: SET_ANSWER,
    payload: { questionId, answer },
  };
};

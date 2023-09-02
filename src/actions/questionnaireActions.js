// actions/questionnaireActions.js
// export const updateQuestion1Option = (questionId,
//   option) => ({
//   type: 'UPDATE_QUESTION_1_OPTION',
//   payload: questionId,
//   option,
// });

// export const updateQuestion2Option = (questionId,
//   option) => ({
//   type: 'UPDATE_QUESTION_2_OPTION',
//   payload: questionId,
//   option,
// });

// export const updateQuestion3Option = (questionId,
//   option) => ({
//   type: 'UPDATE_QUESTION_3_OPTION',
//   payload: questionId,
//   option,
// });

// export const updateQuestion4Option = (questionId,
//   option) => ({
//   type: 'UPDATE_QUESTION_4_OPTION',
//   payload: questionId,
//   option,
// });

export const updateQuestionOption = (questionId, selectedOptionIndex) => ({
  type: 'UPDATE_QUESTION_OPTION',
  payload: {
    question: {
      questionId: questionId,
      selectedOption: selectedOptionIndex,
    },
  },
});

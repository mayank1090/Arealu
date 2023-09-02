// const initialState = {
//   question1Option: "",
//   question2Option: "",
//   question3Option: "",
//   question4Option: "",
// };

// const questionnaireReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "UPDATE_QUESTION_1_OPTION":
//       return { ...state, question1Option: action.payload };
//     case "UPDATE_QUESTION_2_OPTION":
//       return { ...state, question2Option: action.payload };
//     case "UPDATE_QUESTION_3_OPTION":
//       return { ...state, question3Option: action.payload };
//       case "UPDATE_QUESTION_4_OPTION":
//       return { ...state, question4Option: action.payload };
//     default:
//       return state;
//   }
// };

// export default questionnaireReducer;

// reducer logic
const initialState = {
  questions: [], // your initial questions data structure
};

const questionnaireReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_QUESTION_OPTION':
      const { questionId, selectedOption } = action.payload.question;
      const questionIndex = state.questions.findIndex(
        question => question.questionId === questionId
      );
      if (questionIndex !== -1) {
        // Update existing question's selectedOption
        const updatedQuestions = state.questions.map((question, index) => {
          if (index === questionIndex) {
            return {
              ...question,
              selectedOption: selectedOption,
            };
          }
          return question;
        });
        return {
          ...state,
          questions: updatedQuestions,
        };
      } else {
        // Add new question
        return {
          ...state,
          questions: [
            ...state.questions,
            {
              questionId,
              selectedOption,
            },
          ],
        };
      }
    // ... other cases
    default:
      return state;
  }
};

export default questionnaireReducer;



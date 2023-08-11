const initialState = {
  question1Option: "",
  question2Option: "",
  question3Option: "",
  question4Option: "",
};

const questionnaireReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_QUESTION_1_OPTION":
      return { ...state, question1Option: action.payload };
    case "UPDATE_QUESTION_2_OPTION":
      return { ...state, question2Option: action.payload };
    case "UPDATE_QUESTION_3_OPTION":
      return { ...state, question3Option: action.payload };
      case "UPDATE_QUESTION_4_OPTION":
      return { ...state, question4Option: action.payload };
    default:
      return state;
  }
};

export default questionnaireReducer;

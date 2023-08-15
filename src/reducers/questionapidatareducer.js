// questionnaireReducer.js

const initialState = {
    questionnaireData: [],
    loading: false,
    error: null,
  };
  
  const questionapidatareducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_QUESTIONNAIRE_SUCCESS":
        return {
          ...state,
          questionnaireData: action.payload,
          loading: false,
          error: null,
        };
      case "FETCH_QUESTIONNAIRE_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default questionapidatareducer;
  
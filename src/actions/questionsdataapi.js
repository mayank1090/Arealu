

import axios from "axios";

export const fetchQuestionnaireData = () => async (dispatch) => {
  try {
    const response = await axios.get("your-api-endpoint");
    dispatch({
      type: "FETCH_QUESTIONNAIRE_SUCCESS",
      payload: response.data, // Assuming the API returns an array of questions and options
    });
  } catch (error) {
    dispatch({
      type: "FETCH_QUESTIONNAIRE_FAILURE",
      payload: error.message,
    });
  }
};

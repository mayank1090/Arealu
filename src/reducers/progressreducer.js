import { UPDATE_PROGRESS } from "../actions/updateprogress";

const initialState = {
    progressValue: 0, // Initial value for the progress
  };
  
  const progressReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_PROGRESS:
        return {
          ...state,
          progressValue: action.payload, // Update progressValue with the new value
        };
      default:
        return state;
    }
  };
  
  export default progressReducer;
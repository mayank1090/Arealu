
import { UPDATE_AGE ,UPDATE_FULLNAME,UPDATE_GENDER} from "../actions/loginquestions";

const initialState = {
  gender: "",
  age: "",
  fullname:"",
};

const loginquestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GENDER:
      return { ...state, gender: action.payload };
    case UPDATE_AGE:
      return { ...state, age: action.payload };
      case UPDATE_FULLNAME:
      return { ...state, fullname: action.payload };
    default:
      return state;
  }
};

export default loginquestionReducer;

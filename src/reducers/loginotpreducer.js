// reducers.js
import { UPDATE_MOBILE_VALUE,UPDATE_OTP_VALUE } from '../actions/loginotp';

const initialState = {
  otpValue: '',
  mobileValue: ''
};

const loginotpreducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_OTP_VALUE:
      return {
        ...state,
        otpValue: action.payload
      };
    case UPDATE_MOBILE_VALUE:
      return {
        ...state,
        mobileValue: action.payload
      };
    default:
      return state;
  }
};

export default loginotpreducer;

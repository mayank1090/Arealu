export const UPDATE_OTP_VALUE = 'UPDATE_OTP_VALUE';
export const UPDATE_MOBILE_VALUE = 'UPDATE_MOBILE_VALUE';

export const updateOtpValue = (value) => {
    return {
      type: UPDATE_OTP_VALUE,
      payload: value
    };
  };
  
  export const updateMobileValue = (value) => {
    return {
      type: UPDATE_MOBILE_VALUE,
      payload: value
    };
  };
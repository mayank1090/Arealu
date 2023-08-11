// Action Types
export const UPDATE_GENDER = "UPDATE_GENDER";
export const UPDATE_AGE = "UPDATE_AGE";
export const UPDATE_FULLNAME="UPDATE_FULLNAME"

// Action Creators
export const updateGender = (gender) => ({
  type: UPDATE_GENDER,
  payload: gender,
});

export const updateAge = (age) => ({
  type: UPDATE_AGE,
  payload: age,
});

export const updateFullname = (name) => ({
    type: UPDATE_FULLNAME,
    payload: name,
  });

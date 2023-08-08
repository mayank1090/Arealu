
import { CAPTURE_IMAGE } from '../actions/selfiimageaction';

const initialState = {
    front: [],
    top: [],
    closeup: [],
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAPTURE_IMAGE:
        const { type, image } = action.payload;
      return {
        ...state,
        [type]: [...(state[type] || []), image],
      };
    default:
      return state;
  }
};


export default imageReducer;
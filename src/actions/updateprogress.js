export const UPDATE_PROGRESS = 'UPDATE_PROGRESS_BAR';

export const updateprogressvalue = (value) => {
    return {
      type: UPDATE_PROGRESS,
      payload: value
    };
  };
export const CAPTURE_IMAGE = 'CAPTURE_IMAGE';

export const captureImage = (type,imageData) => {
  return {
    type: CAPTURE_IMAGE,
    payload: {type,image:imageData},
  };
};
import {DELETE_RESULT, STORE_RESULT} from "./actionTypes";

export const saveResult = (res) => {
  return {
    type: STORE_RESULT,
    result: res
  }
};

export const storeResult = (res) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // const oldCounter = getState().counter.counter;
      // console.log(oldCounter);
      dispatch(saveResult(res));
    }, 2000)
  }
};

export const deleteResult = (resElId) => {
  return {
    type: DELETE_RESULT,
    id: resElId
  }
};
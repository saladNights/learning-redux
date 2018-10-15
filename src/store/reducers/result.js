import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const newArray = state.results.filter(item => item.id !== action.id);
  return updateObject(state, {results: newArray});
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.STORE_RESULT:
      return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result * 2})});
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
};

export default reducer;
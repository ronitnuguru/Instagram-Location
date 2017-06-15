import { FETCH_INITIAL_INSTAGRAM_DATA, FETCH_FURTHER_INSTAGRAM_DATA } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_INITIAL_INSTAGRAM_DATA:
      return { ...state, data: action.payload.data };
    case FETCH_FURTHER_INSTAGRAM_DATA:
      return { ...state, data: action.payload.data };
    default:
    return state;
  }
};

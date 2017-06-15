import { combineReducers } from 'redux';
import InstagramReducer from './InstagramReducer';

const rootReducer = combineReducers({
  instagramUserMedia: InstagramReducer
});

export default rootReducer;

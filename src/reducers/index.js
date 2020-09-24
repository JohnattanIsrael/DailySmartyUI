import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import posts from '../reducers/postReducer';

const rootReducer = combineReducers({
  form,
  posts
});

export default rootReducer;
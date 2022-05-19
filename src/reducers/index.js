import { combineReducers } from 'redux';
import { categoryReducer } from '../reducers/categoryReducer';
const rootReducer = combineReducers({
  category: categoryReducer,
});

export default rootReducer;

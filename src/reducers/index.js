/*const initialState = {
    favoriteCharacters: [],
    sectionActive: "Characters",
};¨*/

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return {
        ...state,
        sectionActive: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

// example with many reducers
/*import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { headerReducer } from "./headerReducer";
import { searchReducer } from "./searchReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  user: userReducer,
  header: headerReducer,
  search: searchReducer,
  cart: cartReducer,
});

export default rootReducer;*/

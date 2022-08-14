import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { cashReducer } from "../store/cachReducer";
import { userReducer } from "../store/userReducer";
import { postsReducer } from "./postsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cash: cashReducer,
  user: userReducer,
  posts: postsReducer,
});

export const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(thunk)));

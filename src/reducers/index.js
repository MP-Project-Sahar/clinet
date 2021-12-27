import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import sign from "./sign";

const reducers = combineReducers({ sign });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
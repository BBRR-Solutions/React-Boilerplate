import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import AuthReducer from "./AuthReducer";

const AllReducers = combineReducers({
  Counter: CounterReducer,
  Authentification: AuthReducer,
});

export default AllReducers;

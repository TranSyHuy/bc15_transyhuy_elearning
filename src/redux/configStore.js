import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import CourseReducer from "./course";

const rootReducer = combineReducers({
  //state ung dung
  course: CourseReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
export default rootReducer;

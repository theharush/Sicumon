import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import dimensionsReducer from "./dimentionsReducer";

export default combineReducers({
  dimentions: dimensionsReducer,
  auth: authReducer,
  form: reduxForm
});

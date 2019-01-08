import axios from "axios";
import { FETCH_USER, UPDATE_DIMENSIONS } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const updateDimensions = () => {
  return {
    type: UPDATE_DIMENSIONS,
    payload: { width: window.innerWidth, height: window.innerHeight }
  };
};

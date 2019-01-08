import { UPDATE_DIMENSIONS } from "../actions/types";

export default function(state = { height: 800, width: 1000 }, action) {
  switch (action.type) {
    case UPDATE_DIMENSIONS:
      return action.payload;
    default:
      return state;
  }
}

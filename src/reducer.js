import { BUG_ADDED, BUG_REMOVED } from "./actionTypes";

lastId = 0;
export default function reducer(state = [], action) {
  if (action.type === BUG_ADDED) {
    return [
      ...state,
      {
        description: action.payload.description,
        resolved: false,
        id: lastId++,
      },
    ];
  } else if (action.type === BUG_REMOVED) {
    return state.filter((bug) => bug.id != action.payload.id);
  }
  return state;
}

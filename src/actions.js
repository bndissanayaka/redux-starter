import { BUG_ADDED, BUG_REMOVED } from "./actionTypes";

export default function bugAdded(description) {
  return {
    type: BUG_ADDED,
    payload: {
      description: "Bug1",
    },
  };
}

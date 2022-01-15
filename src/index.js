import store from "./store.js";
import bugAdded from "./actions.js";
const unsubscribe = store.subscribe(() => {});

store.dispatch(bugAdded("BUg 1"));

store.dispatch({
  type: BUG_REMOVED,
  payload: {
    id: 1,
  },
});

unsubscribe();

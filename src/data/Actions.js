import ActionTypes from "./ActionTypes.js";
import Dispatcher from "./Dispatcher.js";

const Actions = {
  addItem(text) {
    Dispatcher.dispatch({
      type: ActionTypes.ADD_ITEM,
      text
    });
  },
  removeItem(text) {
    Dispatcher.dispatch({
      type: ActionTypes.REMOVE_ITEM,
      text
    });
  }
};

export default Actions;

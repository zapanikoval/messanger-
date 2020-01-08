import Immutable from "immutable";
import { ReduceStore } from "flux/utils";
import ActionTypes from "./ActionTypes.js";
import Dispatcher from "./Dispatcher.js";
import messages from "./messages.js";
import { compose } from "@material-ui/system";

class MessageStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return Immutable.List(messages);
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.ADD_ITEM:
        if (action.text) {
          return state.push(action.text);
        }
        return state;
      case ActionTypes.REMOVE_ITEM:
        let index = state.indexOf(action.text);

        if (index > -1) {
          return state.delete(index);
        }
        return state;
      default:
        return state;
    }
  }
}

export default new MessageStore();

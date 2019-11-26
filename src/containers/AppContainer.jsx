import InboxPage from "../components/InboxPage.jsx";
import { Container } from "flux/utils";
import Actions from "../data/Actions.js";
import MessageStore from "../data/MessageStore";

import React, { Component } from "react";

class AppContainer extends Component {
  static getStores() {
    return [MessageStore];
  }

  static calculateState(prevState) {
    return {
      messages: MessageStore.getState(),
      onAddItem: Actions.addItem,
      onRemoveItem: Actions.removeItem
    };
  }
  render() {
    return (
      <InboxPage
        messages={this.state.messages}
        onRemoveItem={this.state.onRemoveItem}
        onAddItem={this.state.onAddItem}
      />
    );
  }
}

export default Container.create(AppContainer);

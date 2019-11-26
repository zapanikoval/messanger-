import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/InboxPage.less";
import Message from "./Message.jsx";
import MessagePreview from "./MessagePreview.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddPage from "./AddPage.jsx";

export default class InboxPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    };
  }


  render() {
      return (
        <div className="row">
          <div className="col-4 message-list">
            <div className="list-group">
              {this.props.messages.map(el => (
                <Message
                  element={el}
                  key={el.id}
                  subject={el.subject}
                  senderName={el.senderName}
                  onRemove={this.props.onRemoveItem}
                />
              ))}
            </div>
          </div>
          <div className="col-8 message-content">
            <Switch>
              <Route
                path="/inbox/:messageId"
                render={routeProps => (
                  <MessagePreview
                    messages={this.props.messages}
                    {...routeProps}
                  />
                )}
              >
                {/* <MessagePreview messages={this.props.messages} /> */}
              </Route>
            </Switch>
          </div>
        </div>
      );
  }
}

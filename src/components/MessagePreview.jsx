import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Redirect, Link } from "react-router-dom";

import "../styles/MessagePreview.less";

export default class MessagePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {}
    };
  }

  static getDerivedStateFromProps(props, state) {
    const message = props.messages.find(
      mess => mess.id === props.match.params.messageId
    );
    return { message };
  }
  // Лучше использовать то что сверху
  // componentWillMount() {
  //   const message = this.props.messages.find(
  //     mess => mess.id === this.props.match.params.messageId
  //   );
  //   this.setState({ message });
  // }

  shouldComponentUpdate(nextProps, state) {
    const { messageId: prevId } = this.props.match.params;
    const { messageId: nextId } = nextProps.match.params;

    const newMessage = this.props.messages.find(
      message => message.id === nextId
    );

    console.log(this.props.messages);

    if (newMessage) {
      if (prevId !== nextId) {
        this.setState({
          message: newMessage
        });
      }
    } else {
      this.setState({
        message: null
      });
    }

    return true;
  }

  handleClick() {
    console.log("click add");
  }

  render() {
    let { message } = this.state;

    if (message) {
      return <MessageBody message={message} />;
    } else return <Redir />;
  }
}

function MessageBody(props) {
  return (
    <>
      <div className="message-body">
        <p>
          <b>From:</b> {props.message.senderName} ({props.message.senderEmail})
        </p>
        <p>
          <b>To:</b> you
        </p>
        <p>
          <b>Subject:</b> {props.message.subject}
        </p>
        <hr />
        <p>{props.message.body}</p>
      </div>
      <Link to="/add" className="add-button">
        <Fab
          color="primary"
          className="add-button"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Link>
    </>
  );
}

function Redir(props) {
  return <Redirect to="/inbox" />;
}

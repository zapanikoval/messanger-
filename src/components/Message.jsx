import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Message.less";
import { NavLink } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

export default class Message extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    console.log("click remove");

    this.props.onRemove(this.props.element);
  }


  render() {
    return (
      <NavLink
        activeClassName="active"
        className="list-group-item list-group-item-action"
        to={`/inbox/${this.props.element.id}`}
      >
        <div className="titles">
          <span className="title">{this.props.subject}</span>
          <span className="from">from {this.props.senderName}</span>
        </div>

        <IconButton
          aria-label="delete"
          className="delete-button"
          onClick={this.onClick}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </NavLink>
    );
  }
}

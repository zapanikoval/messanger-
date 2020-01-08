import React from "react";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";

import "../styles/AddPage.less";
import "bootstrap/dist/css/bootstrap.css";

class AddPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      subject: "",
      senderName: "",
      senderEmail: "",
      body: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onAdd() {
    const item = this.state;
    item.id = `${Date.now()}`;
    this.props.onAddItem(item);
    this.setState({
      id: "",
      subject: "",
      senderName: "",
      senderEmail: "",
      body: ""
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <>
        <h2>Save new message</h2>
        <hr />
        <form autoComplete="off" className="send-form">
          <div className="row">
            <div className="col-4 params">
              <TextField
                label="To:"
                defaultValue="You"
                disabled
                className="params-item"
              />
              <TextField
                name="senderName"
                label="Sender name"
                className="params-item"
                value={this.state.senderName}
                onChange={this.handleChange}
              />
              <TextField
                name="senderEmail"
                label="Sender email"
                className="params-item"
                value={this.state.senderEmail}
                onChange={this.handleChange}
              />
              <TextField
                name="subject"
                label="Subject"
                className="params-item"
                value={this.state.subject}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-8 body">
              <TextField
                id="standard-multiline-static"
                label="Body"
                multiline
                name="body"
                rows="9"
                value={this.state.body}
                onChange={this.handleChange}
              />
              <Fab
                variant="extended"
                color="primary"
                aria-label="add"
                className="send-button"
                onClick={this.onAdd}
              >
                <NavigationIcon />
                Send
              </Fab>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default AddPage;

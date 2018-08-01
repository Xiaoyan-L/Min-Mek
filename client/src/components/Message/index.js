import React, { Component } from "react";

class Message extends Component {
  componentDidMount() {
    this.props.setMsgToEmpty();
  }

  componentDidUpdate() {
    if (this.props.message !== '') {
      this.props.setMsgToEmpty();
    }
  }

  render() {
    return (
      <div className="text-success text-center">
        {this.props.message}
      </div>
    )
  }
}

export default Message;

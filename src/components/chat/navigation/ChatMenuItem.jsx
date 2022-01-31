import { Avatar } from "@mui/material";
import React, { Component } from "react";

export default class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  avatarProp() {
    return {
      width: 36,
      height: 36,
    };
  }

  render() {
    return (
      <div className="menu-item">
        <div className="menu-item__avatar" onClick={() => this.props.onClick(this.props.chat.id)}>
          <Avatar alt={this.props.chat.name} src={this.props.chat.url} sx={this.avatarProp()}></Avatar>
        </div>
        <div className="menu-item__preview">
          {this.props.chat.name}
          <div>
            <p>
              {this.props.chat.text}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

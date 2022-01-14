import React, { Component } from "react";
import ChatMenuItem from "./ChatMenuItem";
import "./ChatMenu.scss"
import { TextField } from "@mui/material";

export default class ChatMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chats: [
        { 
          id: 1,
          url: "",
          text: "Olá! Bem vindo ao pikachat!",
          name: "Joao" },
        { 
          id: 2,
          url: "",
          text: "Olá! Bem vindo ao pikachat!",
          name: "Mario" },
        { 
          id: 3,
          url: "",
          text: "Olá! Bem vindo ao pikachat!",
          name: "Clara" },
        { 
          id: 4,
          url: "",
          text: "Olá! Bem vindo ao pikachat!",
          name: "Afonso" },
        { 
          id: 5,
          url: "",
          text: "Olá! Bem vindo ao pikachat!",
          name: "Rafa" },
      ],
      activeChatt: {
        id: "",
      },
      chatFilter: '',
    };
  }

  handleChatFilterInput = (event) => {
    this.setState({ chatFilter: event.target.value});
  }

  render() {
    return (
      <div className="chat-menu">
        <div className="chat-menu__header"> <h3>Conversas</h3> </div>
        <div className="chat-menu-list">
          <div className="chat-menu-list__filter">
            <TextField id="outlined-name" label="Name" value={this.state.chatFilter} onChange={this.handleChatFilterInput}>{}</TextField>
          </div>
          <div className="chat-menu-list__items">
            {this.state.chats.map((chat) => (
              <ChatMenuItem key={chat.id} chat={chat}></ChatMenuItem>
            ))}
          </div>

        </div>
      </div>
    );
  }
}

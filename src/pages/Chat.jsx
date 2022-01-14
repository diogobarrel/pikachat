import { Button } from "@mui/material";

import React, { Component } from "react";
import '../styles/Chat.scss'

export default class ChatApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        profilePic: "",
      },
    };
  }

  render() {
    return (
        <div className="app chat-app">
            <div className="app__base">
                <div className="app__header">  HEAD </div>
                <div className="app__main">
                    <div className="chat-nav">
                        MAIN NAV
                    </div>
                    <div className="chat-main">
                        <div className="chat-container">
                            INFORMAÇÃO DA CONVERSA
                        </div>
                        <div className="chat-replybox-container">
                            REPLYBOX
                            <Button variant="contained" color="primary"> Enviar </Button>
                        </div>
                    </div>
                </div>
                <div className="app__footer">
                    MAIN FOOTER
                </div>
            </div>
        </div>
    );
  }
}

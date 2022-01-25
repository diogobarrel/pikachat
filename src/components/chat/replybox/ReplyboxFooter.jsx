import React, { Component } from 'react'
import { Button } from '@mui/material'
import { Send } from '@mui/icons-material'

export default class ReplyboxFooter extends Component {
  constructor(params) {
    super(params)
    this.state = {
      action: 'reading',
      message: {
        text: '',
        attachments: [],
      },
    }
  }

  render() {
    const sendButton = () => {}

    return (
      <div className="replybox__footer">
        <div className="send__button">
          <Button onClick={sendButton}>
            <Send></Send>Enviar
          </Button>
        </div>
      </div>
    )
  }
}

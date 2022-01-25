import React, { Component } from 'react'
import { Button } from '@mui/material'
import { Send } from '@mui/icons-material'

export default class ReplyboxFooter extends Component {
  constructor(params) {
    super(params)
    this.state = {}
    this.disabled = false
  }

  render() {

    return (
      <div className="replybox__footer">
        <div className="send__button">
          <Button onClick={this.props.send} disabled={this.disabled}>
            <Send></Send>Enviar
          </Button>
        </div>
      </div>
    )
  }
}

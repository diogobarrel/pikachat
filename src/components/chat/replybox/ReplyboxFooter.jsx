import React, { Component } from 'react'
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
    return <div className='replybox__footer'>
          Enviar
          <Send></Send>
    </div>
  }
}

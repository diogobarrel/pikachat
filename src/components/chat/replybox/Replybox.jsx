import { Message, Send } from '@mui/icons-material'
import React, { Component } from 'react'
import TextArea from './TextArea'

import './Replybox.scss'

export default class Replybox extends Component {
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
    return (
      <div className='replybox'>
        <div className="replybox__text-area">
          <TextArea eventbus={this.props.eventbus}></TextArea>
        </div>
        <div className="replybox__footer">
          <Send></Send>
        </div>
      </div>
    )
  }
}

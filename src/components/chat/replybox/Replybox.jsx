import React, { Component } from 'react'
import TextArea from './TextArea'

import './Replybox.scss'
import ReplyboxFooter from './ReplyboxFooter'

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
          <ReplyboxFooter></ReplyboxFooter>
      </div>
    )
  }
}
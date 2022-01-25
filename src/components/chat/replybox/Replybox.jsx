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
      },
    }
  }

  componentWillUnmount() {
    this.props.eventbus.addEventListener('update-text', (text) =>
      this.setState({ message: { text: text } })
    )
  }

  sendMessage() {
    this.props.eventbus.emit('send-message', { ...this.state.message })
  }

  render() {
    return (
      <div className="replybox">
        <div className="replybox__text-area">
          <TextArea eventbus={this.props.eventbus}></TextArea>
        </div>
        <ReplyboxFooter
          eventbus={this.props.eventbus}
          send={this.sendMessage}
        ></ReplyboxFooter>
      </div>
    )
  }
}

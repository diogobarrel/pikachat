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
    this.eventbus = this.props.eventbus
  }

  componentDidMount() {
    this.eventbus.addListener('update-text', (text) => {
      this.setState({ message: { text: text } })
      console.log(this.state.message)
    })
  }

  sendMessage() {
    debugger
    this.eventbus.emit('send-message', { ...this.state.message })
  }

  render() {
    return (
      <div className="replybox">
        <div className="replybox__text-area">
          <TextArea eventbus={this.eventbus}></TextArea>
        </div>
        <ReplyboxFooter
          eventbus={this.eventbus}
          send={this.sendMessage}
        ></ReplyboxFooter>
      </div>
    )
  }
}

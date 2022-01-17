
import React, { Component } from 'react'
import ChatMenu from '../components/chat/navigation/ChatMenu'
import '../styles/Chat.scss'
import Replybox from '../components/chat/replybox/Replybox'
import EventEmitter from 'events'

export default class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        email: '',
        profilePic: '',
      },
      message: {
        text: '',
      },
    }

    this.chatEventBus = new EventEmitter()
  }

  componentDidMount() {
    this.chatEventBus.addListener('text-area-input', (value) => {
        this.setState({ message: { text: value } })
    })
  }

  render() {
    return (
      <div className="app chat-app">
        <div className="app__base">
          <div className="app__header"></div>
          <div className="app__main chat__main">
            <div className="chat__menu">
              <ChatMenu></ChatMenu>
            </div>
            <div className="chat__main--conversation">
              <div className="chat-container"></div>
              <div className="chat-replybox-container">
                <Replybox eventbus={this.chatEventBus}></Replybox>
              </div>
            </div>
          </div>
          <div className="app__footer"></div>
        </div>
      </div>
    )
  }
}

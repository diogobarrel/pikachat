import React, { Component } from 'react'
import ChatMenu from '../components/chat/navigation/ChatMenu'
import Feed from '../components/chat/feed/Feed'
import '../styles/Chat.scss'
import Replybox from '../components/chat/replybox/Replybox'
import EventEmitter from 'events'

import store from '../store'
import ChatService from '../services/chat-service'

export default class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeChat: {
        id: 'z1vbrzLESLtE30B8Jyu4',
        participants: [],
        newMessage: {
          text: '',
          attachments: [],
        },
      },
    }

    this.service = new ChatService()
    this.chatEventBus = new EventEmitter()
  }
  
  async componentDidMount() {
    this.chatEventBus.addListener('send-message', ({ text }) => {
      this.service.sendMessage({
        userId: this.props.user.uid,
        chatId: this.state.activeChat.id,
        text,
      })
    })
    const chats = await this.service.getUserChats(this.props.user.uid)
    this.service.watchChats(this.props.user.uid, this.setChats)
    this.service.watchMessages(chats[0].id, this.setMessages)
  }

  setChats(chats) {
    store.dispatch({ type: 'chats/setChats', payload: chats })
  }

  setMessages(messages) {
    store.dispatch({ type: 'messages/setMessages', payload: messages })
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
              <div className="chat-container" id="chat-feed">
                <Feed eventbus={this.chatEventBus}></Feed>
              </div>
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

import React, { useState } from 'react'
import ChatMenuItem from './ChatMenuItem'
import './ChatMenu.scss'
import { TextField } from '@mui/material'
import { useSelector } from 'react-redux'

export default function ChatMenu() {
  const [filter, setFilter] = useState('')

  const handleChatFilterInput = (event) => {
    setFilter(event.target.value)
  }

  const chats = useSelector((state) => state.chatStore.chats)

  return (
    <div className="chat-menu">
      <div className="chat-menu__header">
        <h3>Conversas</h3>
      </div>
      <div className="chat-menu-list">
        <div className="chat-menu-list__filter">
          <TextField
            id="outlined-name"
            label="Name"
            value={filter}
            onChange={handleChatFilterInput}
          ></TextField>
        </div>
        <div className="chat-menu-list__items">
          {chats &&
            chats.map((chat) => (
              <ChatMenuItem key={chat.id} chat={chat}></ChatMenuItem>
            ))}
        </div>
      </div>
    </div>
  )
}

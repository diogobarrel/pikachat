import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Stack } from '@mui/material'

import FeedItem from './FeedItem'
import './FeedItem.scss'

export default function Feed(props) {
  const messages = useSelector((state) => state.messageStore.messages)
  const scrollToBottom = () => {
    const feedContainer = document.getElementById('chat-feed')
    feedContainer.scrollTop = feedContainer.scrollHeight
  }

  useEffect(() => {
    scrollToBottom()
    props.eventbus.addListener('send-message', () => {
      scrollToBottom()
    })
  })

  return (
    <>
      <Stack spacing={1} className='chat-feed' id='chat-feed'>
        {messages &&
          messages.map((message) => (
            <FeedItem key={message.id} message={message}></FeedItem>
          ))}
      </Stack>
      <div className="chat-footer"></div>
    </>
  )
}

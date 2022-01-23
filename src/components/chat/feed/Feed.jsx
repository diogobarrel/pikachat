import React from 'react'
import { useSelector } from 'react-redux'
import { Stack } from '@mui/material'

import FeedItem from './FeedItem'

export default function Feed() {
  const messages = useSelector((state) => state.messageStore.messages)

  return (
    <>
      <Stack spacing={2}>
        {messages &&
          messages.map((message) => (
            <FeedItem key={message.id} message={message}></FeedItem>
          ))}
      </Stack>
    </>
  )
}

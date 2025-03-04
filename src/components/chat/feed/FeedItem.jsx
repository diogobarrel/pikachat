import React, { Component } from 'react'
import { Paper } from '@mui/material'

export default class FeedItem extends Component {
  render() {
    const sentAt = this.props.message.sentAt ? new Date(this.props.message.sentAt.seconds * 1000).toDateString() : 'now'

    return (
      <div className='feed-item'>
        <Paper>
          <div className='feed-item__message'>
            <div className='feed-item__message-text'>
              <p>{this.props.message.text}</p>
            </div>
            <div className='feed-item__sent_at'>
              <p>sent at</p>
              <p className='feed-item__sent_at_time'>{sentAt}</p>
            </div>
          </div>
        </Paper>
      </div>
    )
  }
}

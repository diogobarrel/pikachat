import React, { Component } from 'react'
import { Paper } from '@mui/material'

export default class FeedItem extends Component {
  render() {
    return (
      <div>
        <Paper>
          <p> {this.props.message.text}</p>
        </Paper>
      </div>
    )
  }
}

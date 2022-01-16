import React, { Component } from 'react'

export default class ReplyboxFooter extends Component {
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
    return <div>
        <div>
            <div contentEditable className='text-area'>
                { this.props.message.text }
            </div>
        </div>
    </div>
  }
}

import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'
import sanitizeHtml from 'sanitize-html'

export default class textArea extends Component {
  constructor(params) {
    super(params)
    this.state = {
      html: '',
      editable: true,
      attachments: [],
    }

    this.editing = false
    this.editOnClick = true
    this.domElm = null
    this.eventbus = this.props.eventbus
  }

  componentDidMount() {
    this.eventbus.addListener('send-message', () => this.clear())
  }

  componentWillUnmount() {
    this.eventbus.removeListener('send-message', this.clear)
  }
  
  handleKeyDown = (input) => {
    const { key, ctrlKey } = input
    switch (key) {
      default:
        break

      case 'Enter':
        ctrlKey && console.log('Control Enter')
        break
    }
  }

  handleChange = (evt) => {
    this.setState({ html: evt.target.value })
    this.eventbus.emit('update-text', this.state.html)
  }

  clear = () => {
    this.setState({ html: '' })
  }

  sanitizeConf = {
    allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'h1'],
    allowedAttributes: { a: ['href'] },
  }

  sanitize = () => {
    this.setState({ html: sanitizeHtml(this.state.html, this.sanitizeConf) })
  }

  toggleEditable = () => {
    this.setState({ editable: !this.state.editable })
  }

  render() {
    return (
      <ContentEditable
        id="replybox-textarea"
        onFocus={() => (this.editing = true)}
        /* onFocus={this.restoreSelection()} */
        onBlur={() => (this.editing = false)}
        innerRef={(domNode) => {
          this.domElm = domNode
        }}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
        html={this.state.html}
        data-placeholder="Escreva sua mensagem"
        {...this.props}
      ></ContentEditable>
    )
  }
}

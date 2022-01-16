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
  }

  handleKeyDown = (input) => {
    const { key, code, charCode, ctrlKey, altKey } = input
    switch(key) {
        default:
            console.log(key, code, charCode, ctrlKey, altKey)
            break;

        case 'Enter':
            ctrlKey && console.log('Control Enter')
            break;
    }
  }

  handleChange = evt => {
    this.setState({ html: evt.target.value });
  };

  sanitizeConf = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
    allowedAttributes: { a: ["href"] }
  };

  sanitize = () => {
    this.setState({ html: sanitizeHtml(this.state.html, this.sanitizeConf) });
  };

  toggleEditable = () => {
    this.setState({ editable: !this.state.editable });
  };


  render() {
    return (
      <ContentEditable
        onFocus={() => (this.editing = true)}
        /* onFocus={this.restoreSelection()} */
        onBlur={() => (this.editing = false)}
        innerRef={(domNode) => {
          this.domElm = domNode
        }}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
        html={this.state.html}
        {...this.props}
      ></ContentEditable>
    )
  }
}

import React, { Component } from 'react'

export default class textArea extends Component {
  constructor(params) {
    super(params)
    this.state = {
      html: '',
      attachments: [],
    }

    this.editing = false
    this.editOnClick = true
    this.domElm = null
  }

  save() {
    // this.setState({ html: this.props.html })
  }

  toggleEdit() {
    this.editing = !this.editing
  }

  addText(text) {
    this.domElm.innerHTML = this.domElm.innerHTML + text
  }

  addLineBreak() {
    this.setState({ html: this.domElm.innerHTML + '\n' })
    const isEmpty = this.domElm.innerHTML === ''
    const firstCharacterIsLinebreak =
      this.domElm.innerHTML[this.domElm.innerHTML.length - 1] === '\n'
    this.addText('\n')
    if (isEmpty || !firstCharacterIsLinebreak) {
      this.addText('\n')
    }
    this.domElm.scrollTop = this.domElm.scrollHeight
  }

  handleKeyDown = (input) => {
    const { key, code, charCode, ctrlKey, altKey } = input

    switch (key) {
      case 'Enter': {
        input.stopPropagation()
        input.preventDefault()
        this.addLineBreak()
        break
      }
      default: {
        console.log(key)
        console.log(this.state.html)
        this.setState({ html: this.domElm.innerHTML + key })
        this.props.eventbus.emit('text-area-input', this.state.html)
      }
    }
  }

  render() {
    return (
      <div
        className={this.editing ? 'editing' : ''}
        onClick={this.editOnClick ? this.toggleEdit() : undefined}
        contentEditable
        suppressContentEditableWarning
        ref={(domNode) => {
          this.domElm = domNode
        }}
        onBlur={this.save()}
        onKeyDown={this.handleKeyDown}
        {...this.props}
      ></div>
    )
  }
}

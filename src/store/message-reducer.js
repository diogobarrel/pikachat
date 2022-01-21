const messageReducer = (
    state = {
      messages: [],
      newMessage: {
          text: '',
          attachments: [],
          mentions: [],
      },
    },
    action
  ) => {
    switch (action.type) {
      default: {
        return state
      }
  
      case 'messages/setMessages': {
        return {
          ...state,
          messages: action.payload,
        }
      }
  
      case 'messages/activate': {
          return {
              ...state,
              activeChat: action.payload
          }
      }
    }
  }
  
  export default messageReducer
  
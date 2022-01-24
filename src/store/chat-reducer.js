const chatReducer = (
  state = {
    chats: [],
    activeChat: {},
    filter: '',
  },
  action
) => {
  switch (action.type) {
    default: {
      return state
    }

    case 'chats/setChats': {
      return {
        ...state,
        chats: action.payload,
      }
    }

    case 'chats/activate': {
      return {
        ...state,
        activeChat: action.payload,
      }
    }
  }
}

export default chatReducer

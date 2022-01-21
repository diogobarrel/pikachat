import { createStore } from 'redux'
import { combineReducers } from 'redux'
import chatReducer from './chat-reducer'
import messageReducer from './message-reducer'

const store = createStore(
  combineReducers({
    chats: chatReducer,
    messages: messageReducer,
  })
)

export default store

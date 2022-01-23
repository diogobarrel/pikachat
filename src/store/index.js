import { createStore } from 'redux'
import { combineReducers } from 'redux'
import chatReducer from './chat-reducer'
import messageReducer from './message-reducer'
import { composeWithDevTools } from 'redux-devtools-extension'


const composedEnhancers = composeWithDevTools()


const store = createStore(
  combineReducers({
    chatStore: chatReducer,
    messageStore: messageReducer,
  }),
  composedEnhancers
)

export default store

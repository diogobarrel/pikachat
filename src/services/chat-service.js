import {
  getFirestore,
  serverTimestamp,
  getDocs,
  doc,
  collection,
  collectionGroup,
  query,
  where,
  limit,
} from 'firebase/firestore'

export default class ChatService {
  constructor() {
    this.firestoreInstance = getFirestore()
  }

  postMessage(text, chatId) {}

  async getUserChats(userId) {
    const chatsRef = collection(this.firestoreInstance, 'chats')
    const q = query(
      chatsRef,
      where('participants', 'array-contains', userId),
      limit(20)
    )
    const chatsQuery = await getDocs(q)
    if (chatsQuery.empty) {
      return []
    }

    const chatsData = chatsQuery.docs.map((doc) => {
      return { ...doc.data(), id: doc.id }
    })
    console.log(chatsData)
    return chatsData
  }

  async getMesages(chatId) {
    debugger
    const chatMessagesRef = collection(this.firestoreInstance, 'chatMessages')
    const chatRef = chatMessagesRef.doc(chatId)
    const messagesRef = chatRef.doc('messages')
    const q = query(messagesRef, limit(20))
    const chatsQuery = await getDocs(q)
    if (chatsQuery.empty) {
      return []
    }

    const [chatsData] = chatsQuery.docs.map((doc) => doc.data())
    console.log(chatsData)
    return chatsData
  }
}

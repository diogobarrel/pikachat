import {
  getFirestore,
  serverTimestamp,
  getDocs,
  collection,
  query,
  where,
  limit,
  orderBy,
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
    const messagesRef = collection(this.firestoreInstance, 'chatMessages', chatId, 'messages')
    const q = query(messagesRef, limit(20), orderBy('sentAt'))
    const messagesQuery = await getDocs(q)
    if (messagesQuery.empty) {
      return []
    }

    const [messagesData] = messagesQuery.docs.map((doc) => doc.data())
    console.log(messagesData)
    return messagesData
  }
}

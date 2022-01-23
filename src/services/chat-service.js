import {
  getFirestore,
  serverTimestamp,
  getDocs,
  collection,
  query,
  where,
  limit,
  orderBy,
  onSnapshot,
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
    const messagesRef = collection(
      this.firestoreInstance,
      'chatMessages',
      chatId,
      'messages'
    )
    const q = query(messagesRef, limit(20), orderBy('sentAt'))
    const messagesQuery = await getDocs(q)
    if (messagesQuery.empty) {
      return []
    }

    const [messagesData] = messagesQuery.docs.map((doc) => {
      return { ...doc.data(), id: doc.id }
    })
    console.log(messagesData)
    return messagesData
  }

  async watchChats(userId, setter) {
    const chatsRef = collection(this.firestoreInstance, 'chats')
    const q = query(
      chatsRef,
      where('participants', 'array-contains', userId),
      limit(20)
    )
    const unsub = onSnapshot(q, (qSnapshot) => {
      const chatsData = []
      qSnapshot.forEach((doc) => chatsData.push({...doc.data(), id: doc.id}))
      console.log('Updated messages', chatsData)
      setter(chatsData)
    })
    return unsub
  }

  async watchMessages(chatId, setter) {
    const messagesRef = collection(
      this.firestoreInstance,
      'chatMessages',
      chatId,
      'messages'
    )
    const q = query(messagesRef, limit(20), orderBy('sentAt'))
    const unsub = onSnapshot(q, (qSnapshot) => {
      const messagesData = []
      qSnapshot.forEach((doc) => messagesData.push({...doc.data(), id: doc.id}))
      console.log('Updated messages', messagesData)
      setter(messagesData)
    })
    return unsub
  }
}

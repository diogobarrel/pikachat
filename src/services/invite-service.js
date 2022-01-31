import {
  getFirestore,
  collection,
  doc,
  addDoc,
  updateDoc,
  getDocs,
  query,
  where,
  serverTimestamp,
} from 'firebase/firestore'

export default class InviteService {
  constructor() {
    this.firestoreInstance = getFirestore()
  }

  async fetchInvites(userId) {
    const invitesRef = collection(this.firestoreInstance, 'invites')
    const q = query(invitesRef, where('from', '=', userId))
    const invitesQuery = await getDocs(q)
    if (invitesQuery.empty) {
      return []
    }
    const invitesData = invitesQuery.docs.map((doc) => {
      return { ...doc.data, id: doc.id }
    })
    console.log(invitesData)
    return invitesData
  }

  async sendInvite(userId, email) {
    const invitesRef = collection(this.firestoreInstance, 'invites')
    const newInvite = await addDoc(invitesRef, {
      from: userId,
      to: email,
      createdAt: serverTimestamp(),
      accepted: false
    })
    return {
      id: newInvite.id
    }
  }

  async acceptInvite(inviteId) {
    const inviteRef = doc(this.firestoreInstance, 'invites', inviteId)
    await updateDoc(inviteRef, {
      accepted: true
    })

    console.log('Accepting invite Id', inviteId)
  }
}

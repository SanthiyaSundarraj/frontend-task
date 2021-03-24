import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {apiKey: "AIzaSyDkfotQ93ynzKlSceiX5_ioUcdZ2JD8zII",
  authDomain: "fir-3ac3a.firebaseapp.com",
  projectId: "fir-3ac3a",
  storageBucket: "fir-3ac3a.appspot.com",
  messagingSenderId: "487549600614",
  appId: "1:487549600614:web:c31d90dc6d89add1f8bea7",
  measurementId: "G-SLXNXHJVNE",
}

firebase.initializeApp(firebaseConfig)

export default firebase.auth()

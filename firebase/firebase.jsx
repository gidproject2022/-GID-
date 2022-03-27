import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDZ9CC4wtl7O_SOmfAbbvf3M11PsGgm2ek",
  authDomain: "gid123-77bd0.firebaseapp.com",
  projectId: "gid123-77bd0",
  storageBucket: "gid123-77bd0.appspot.com",
  messagingSenderId: "106496086947",
  appId: "1:106496086947:web:addf937db3a56c85228016",
}

const app = initializeApp(firebaseConfig)

const auth = getAuth()
export { auth }

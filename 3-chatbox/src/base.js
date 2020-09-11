import Rebase from 're-base'
import firebase from "firebase/app"
import "firebase/database"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCG2wgDxQpiyxhiV59VD0-gVnSd3Yilh-M",
    authDomain: "chatbox-6932a.firebaseapp.com",
    databaseURL: "https://chatbox-6932a.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
import firebase from "firebase"

const config  = {
    apiKey: "AIzaSyAy7JfxFZ3lSGXIYTZ1NiXkWdTiVqtODmA",
    authDomain: "quizapp-pwabyahsen.firebaseapp.com",
    databaseURL: "https://quizapp-pwabyahsen.firebaseio.com",
    projectId: "quizapp-pwabyahsen",
    storageBucket: "quizapp-pwabyahsen.appspot.com",
    messagingSenderId: "210637958931",
    appId: "1:210637958931:web:25ae6d8b680ab8ef31b4e6"
}

firebase.initializeApp(config)

export default firebase
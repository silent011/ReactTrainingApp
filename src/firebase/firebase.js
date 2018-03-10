import * as firebase from 'firebase'

//insert your own firebase api keys here
const config = {
    apiKey: "AIzaSyDvOl8-SNCMk7rOcp5kRCDcwr-GCl7B9wU",
    authDomain: "reactapp-2341d.firebaseapp.com",
    databaseURL: "https://reactapp-2341d.firebaseio.com",
    projectId: "reactapp-2341d",
    storageBucket: "reactapp-2341d.appspot.com",
    messagingSenderId: "194457179197" 
}

firebase.initializeApp(config)

const database = firebase.database()

export {firebase, database as default}
import * as firebase from 'firebase'

//insert your own firebase api keys here
const config = {
    
}

firebase.initializeApp(config)

const database = firebase.database()

export {firebase, database as default}
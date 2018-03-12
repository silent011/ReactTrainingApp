import * as firebase from 'firebase'

const nodeEnv = process.env.NODE_ENV || 'development'
let configFileName = {
    test: 'firebase-test-config',
    dev: 'firebase-dev-config'
}
//insert your own firebase api keys here
let configNeeded = ''
if(nodeEnv === 'test'){
    configNeeded = configFileName.test
} else if (nodeEnv === 'development') {
    configNeeded = configFileName.dev
} else if (nodeEnv === 'production') {
    configNeeded = configFileName.dev
}

const config = require(`./${configNeeded}`)

firebase.initializeApp(config)

const database = firebase.database()

export {firebase, database as default}
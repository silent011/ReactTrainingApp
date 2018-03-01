const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static('public'))


const server = app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}
     in envirionment: ${process.env.NODE_ENV}`)
     console.log('adress2',server.address())
})
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to the Thunder Dome')
})

app.listen(3000)
const express = require('express')
const app = express()
const port = 8088

app.get('/', (req, res) => {
    res.send('Hello Docker!')
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})

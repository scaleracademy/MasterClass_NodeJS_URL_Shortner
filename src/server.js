const express = require('express')

const app = express()

app.get('/', (req, res) => {
    let user = req.query.name
    if (!user) user = 'World'
    res.send('Hello ' + user)
})

app.listen(4445, () => {
    console.log('Server started on http://localhost:4445')
})
const express = require('express')
const app = express()
const port = 3002

const mockUserData=[
    {name:'Mark'},
    {name: 'Jill'}
]

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', (req, res) => res.json({
    success: true,
    message: 'Successfully got users. Nice!',
    users: mockUserData
}))

app.listen(port, () => console.log(`express app listening on port port! 3002`))



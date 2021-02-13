const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());
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

app.get('/users/:id', (req, res) => {console.log(req.params.id)
   res.json({
       success: true,
       message: 'got one user',
       user: req.params.id
   }) 
})

app.post('/login', (req, res) =>{
    const username=req.body.username;
    const password=req.body.password;

    const mockUsername="sleemTheKing";
    const mockPassword="keepShut";

    if (username===mockUsername && password===mockPassword){
    res.json({
        success: true,
        message: 'password and username match!',
        token: 'encrypted token goes here'
    })
    } else {
    res.json({
        success: false,
        message: 'password and username do not match'
    })
    }
})

app.listen(port, () => console.log(`express app listening on port port! 3002`))



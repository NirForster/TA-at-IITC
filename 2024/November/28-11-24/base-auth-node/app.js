const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

const PORT = 3000;
const saltRounds = 10;

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send({
        message: "Hello from the server!"
    })
})

app.post('/encrypt-password', (req, res) => {
    const { userPassword } = req.body;
    console.log(userPassword);
    res.send({
        userPassword
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})
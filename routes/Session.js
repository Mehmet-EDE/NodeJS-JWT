const express = require('express')
const router = express.Router();

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../model/user')

router.post('/register', (req, res) => { // sign up
    const { username, password } = req.body;
    bcrypt.hash(password, 10).then(hash => {
        const user = {
            username,
            password: hash
        }
        User.create(user).then(response => {
            res.send(response)
        })
    })
})
router.post('/authenticate', (req, res) => {   //Giriş yapma operasyonu
    const { username, password } = req.body;
    User.findAll({ where: { username: username } }).then((result) => {
        if (result.length) {
            const user = result[0]
            bcrypt.compare(password, user.password).then((status) => {
                if (!status) {
                    res.json({
                        status,
                        message: "Authentication failed, wrong password"
                    })
                } else {
                    const payload = {
                        username
                    };
                    const token = jwt.sign(payload, req.app.get('apiSecretKey'), {
                        expiresIn: 60 // 1 dakika
                    })
                    res.json({
                        status,
                        token,
                        message: "Login successful"
                    })
                }
            })
        } else {
            res.json({
                status: false,
                message: 'Login failed, user not found.'
            })
        }
    })
})

module.exports = router
const express = require('express')

const authController = require('../controllers/authController')

const router = express.Router()

router.post('/login', authController.login, (req, res) => {
    return res.status(200).json(res.locals)
})

router.post('/signUp', authController.signUp, (req, res) => {
    return res.status(200).json(res.locals)
})


module.exports = router
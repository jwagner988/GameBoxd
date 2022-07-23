const db = require('../model/DBModel.js')
const cryptoJS = require('crypto-js')
const secret = 'secretKeyPog'

const authController = {}


authController.login = (req, res, next) => {
    const { username, password } = req.body
    const verifyQuery = `SELECT * FROM users WHERE username='${username}';`
    db.query(verifyQuery)
        .then(result => {
            console.log('this should be result', result.rows[0])
            const bytes = cryptoJS.AES.decrypt(result.rows[0].password, secret)
            const pass = bytes.toString(cryptoJS.enc.Utf8)
            if (password === pass){
                console.log('password good')
                res.locals.isAuthenticated = true
                res.locals.username = username
                res.locals.id = result.rows[0]._id
                res.cookie('Verification Cookie', 'true', {
                    maxAge: 86400 * 1000,
                    httpOnly: true,
                    secure: true
                })
            }
            return next()
        })
        .catch(err => next({
            log: `authController.login: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
            message: {err: "Error at authController.login Check server logs"}
        }))
}


authController.signUp = (req, res, next) => {
    const { username, password, email } = req.body
    let cipher = cryptoJS.AES.encrypt(password, secret).toString()
    const query = `insert into users (username, password, email) values ($1, $2, $3);`
    const queryObj = {
        text: query,
        values: [username, cipher, email]
    }
    db.query(queryObj.text, queryObj.values)
        .then(result => {
            return next()
        })
        .catch(err => next({
            log: `authController.signUp: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
            message: {err: 'Error in authController.signUp Check server logs'}
        }))
}

module.exports = authController;




const db = require('../model/DBModel.js')
const cryptoJS = require('crypto-js')
const secret = 'secretKeyPog'

const authController = {}


authController.login = (req, res, next) => {
    const { username, password } = req.body
    const verifyQuery = `SELECT * FROM users WHERE username='${username}';`
    db.query(verifyQuery)
    //     if (err) console.log('error', err)
    //     // console.log(result.rows[0].username)
    // })
        .then(result => {
            console.log('this should be result', result.rows[0])
            let bytes = cryptoJS.AES.decrypt(result.rows[0].password, secret)
            let pass = bytes.toString(cryptoJS.env.Utf8)
            console.log(pass)
            if (password === pass){
                res.locals.valid = true
                res.locals.username = username
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


// postgres://zhvzbmrk:umPs0S7dX5Iqakgm1xz_4R_2SJTcNOXE@heffalump.db.elephantsql.com/zhvzbmrk


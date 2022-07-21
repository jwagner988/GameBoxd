const authController = {}


authController.login = (req, res, next) => {
    const { username, password } = req.body
    console.log(username, password)
    if (username !== undefined && password !== undefined) {
        res.locals = {
            isAuthenticated: true,
            username: username,
            id: Math.floor(Math.random() * 100)

            //this needs to be changed obviously

        }
    }
    return next()
}


authController.signUp = (req, res, next) => {
    const { username, password, data, email } = req.body
    console.log(req.body)
    res.locals = {
        success: true
    }
    // this is where we would check against the DB
    let num = Math.floor(Math.random() * 100)
    if (num < 50) res.locals.success = false

    return next() 
}

module.exports = authController;





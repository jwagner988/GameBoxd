const authController = {}


authController.login = async (req, res, next) => {
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

module.exports = authController;
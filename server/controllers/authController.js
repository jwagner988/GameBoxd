const authController = {}


authController.login = async (req, res, next) => {
    const { username, password } = req.body
    if (username !== undefined && password !== undefined) {
        res.locals = {
            hey: 'youre in!'
        }
    }
    return next()
}

module.exports = authController;
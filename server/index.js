const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const { __esModule } = require('style-loader/dist')

const authRouter = require('./routes/authRouter')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/auth', authRouter)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'index.html'))
})

app.listen(3000, () => {
    console.log('listening on PORT 3000 :)')
})
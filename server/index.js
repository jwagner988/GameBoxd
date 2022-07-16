const express = require('express')
const app = express()
const path = require('path')
const { __esModule } = require('style-loader/dist')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'index.html'))
})

app.listen(3000, () => {
    console.log('listening on PORT 3000 :)')
})
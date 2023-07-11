require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const ConnectDatabase = require('./DB/index.js')
const PasteBinRouter = require('./Router/PasteBin.route.js')
const YTRouter = require('./Router/YTDownloader.js')


app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

app.get('/', (req, res) => {
    res.send("ok")
})

app.use('/pastebin', PasteBinRouter)
app.use('/yt', YTRouter);

ConnectDatabase()
    .then(() => {
        app.listen('8000', () => {
            console.log("Server Started")
        })
})

        



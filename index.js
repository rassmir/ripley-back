const express = require('express');
const cors = require('cors')
const bodeParser = require('body-parser')
const apiRouter = require('./routes/app')
const app = express();

require ('./config/database')

app.use(bodeParser.json())
app.use(bodeParser.urlencoded({
    extended: true
}))

app.use(cors())
app.use('/api',apiRouter)


app.listen(process.env.PORT || 3000, () => {
    console.log('servidor corriendo!')
})
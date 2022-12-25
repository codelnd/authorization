require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3200
const app = express()

const startServer = async () => {
    try {
        app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порту`))
    } catch (err) {
        console.log(err)
    }
}

startServer()



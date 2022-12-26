require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3200;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());



const startServer = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порту`))
    } catch (err) {
        console.log(err)
    }
}

startServer()



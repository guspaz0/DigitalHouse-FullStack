const express = require('express')
const morgan = require('morgan')
const path = require('path')
const PORT = "8000"
const app = express()


app.use(express.static('public'));
app.use(morgan("dev"));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'))
});

app.listen(PORT,(req,res) => {
    console.log(`Server corriendo en puerto ${PORT}`)
});
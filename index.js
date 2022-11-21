const PORT = process.env.PORT || 3000;
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: 'http://localhost:4200'
}));

app.get("/", (req, res) => {
    return res.send('aqui')
})


app.get("/download/:guid", (req, res) => {
    let min = 1;
    let max = 2;
    let x = Math.floor(Math.random() * (max - min + 1) + min);
    let file = '';
    if (x = 1) {
        file = `${__dirname}/files/20MB.zip`;
    }else{
        file = `${__dirname}/files/10MB.zip`;
    }
    return res.download(file);
})


app.listen(PORT, () => {
    console.log(`server in : ${PORT}`);
})

module.exports = app;

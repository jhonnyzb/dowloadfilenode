const PORT = process.env.PORT || 3000;
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: 'http://localhost:4200/'
}));

app.get("/", (req, res) => {
    return res.send('aqui')
})

app.get("/download1", (req, res) => {
    return res.download("fondo1.png");
    return res.send('aqui2')
})

app.get("/download/:guid", (req, res) => {
    const file = `${__dirname}/files/file1.jpg`;
    return res.download(file);
})


app.listen(PORT, () => {
    console.log(`server in : ${PORT}`);
})

module.exports = app;

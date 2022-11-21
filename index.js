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


app.get("/download/:guid", (req, res) => {
    const file = `${__dirname}/files/5MB.zip`;
    return res.download(file);
})


app.listen(PORT, () => {
    console.log(`server in : ${PORT}`);
})

module.exports = app;

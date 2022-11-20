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

app.get("/download", (req, res) => {
    res.download("./files/10MB.zip");
})

app.listen(4000);


app.listen(PORT, () => {
    console.log(`server in : ${PORT}`);
})

module.exports = app;

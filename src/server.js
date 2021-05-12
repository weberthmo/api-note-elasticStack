const express = require('express');
const routes = require('./routes');
// var cors = require('cors')

const app = express();
app.use(express.json());
// app.use(cors());

let port = process.env.port || 7000;

app.get('/', (req, res) => {
    res.json({ "Leitebem": "Tudo bem aqui" });
})

app.use(routes)
app.listen(7000, '0.0.0.0');
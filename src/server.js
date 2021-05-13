const express = require('express');
const routes = require('./routes');
// var cors = require('cors')
// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({
    // Override the service name from package.json
    // Allowed characters: a-z, A-Z, 0-9, -, _, and space
    serviceName: 'api-note-elasticStack',
    // Use if APM Server requires a secret token
    // secretToken: '',

    // Set the custom APM Server URL (default: http://localhost:8200)
    serverUrl: 'http://localhost:8200/',

    // Set the service environment
    environment: 'production'
})


const app = express();
app.use(express.json());
// app.use(cors());

let port = process.env.port || 7000;

app.get('/', (req, res) => {
    res.json({ "Leitebem": "Tudo bem aqui" });
})

app.use(routes)
app.listen(7000, '0.0.0.0');
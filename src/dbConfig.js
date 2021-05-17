const elastic = require("elasticsearch");
const bodyParser = require("body-parser").json();

const elasticClient = elastic.Client({
    host: "localhost:9200",
    keepAlive: true,

});
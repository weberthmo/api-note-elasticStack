const elastic = require("elasticsearch");
const bodyParser = require("body-parser").json();

const elasticClient = elastic.Client({
    host: "localhost:9200",
    keepAlive: true,

});


module.exports = {
    async store(req, res) {
        console.log(req.body, 'body');
        elasticClient
            .index({
                index: "pessoas",
                body: req.body,
            })
            .then((resp) => {
                return res.status(200).json({
                    msg: "product indexed",
                });
            })
            .catch((err) => {
                return res.status(500).json({
                    msg: "Error",
                    err,
                });
            });
    },
    async teste(req, res) {
        res.json({ "Leitebem": "Tudo bem aqui" });
    }

}



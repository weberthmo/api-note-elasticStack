const express = require("express");
const apiController = require("./controllers/apiController");
const routes = express.Router();

routes.post("/api/pessoa", apiController.store);
routes.get("/api/teste", apiController.teste);
// routes.get("/api", apiController.indexAll);
// routes.get("/api", apiController.indexById);
// routes.delete("/api/:idPerson", apiController.dellPerson);
// routes.delete("/api/:idPerson/:establishment", apiController.dellEstablishment);
// routes.put("/api", apiController.upDate);



module.exports = routes;
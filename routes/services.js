const router = require("express").Router()

const serviceController = require("./../controllers/serviceController");

router // INSERIR
    .route("/services")
    .post((req, res) => serviceController.create(req, res));

router // LISTAR TODOS
    .route("/services").get((req, res) => serviceController.getAll(req, res));

router // LISTAR POR ID
    .route("/services/:id")
    .get((req, res) => serviceController.get(req, res));

router // DELETE POR ID
    .route("/services/:id")
    .delete((req, res) => serviceController.delete(req, res));

router // ATUALIZA POR ID
    .route("/services/:id")
    .put((req, res) => serviceController.update(req, res));


module.exports = router;
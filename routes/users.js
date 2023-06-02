const router = require("express").Router()

const userController = require("./../controllers/userController");

router // INSERIR
    .route("/user")
    .post((req, res) => userController.create(req, res));

router // LISTAR TODOS
    .route("/user").get((req, res) => userController.getAll(req, res));


router // LISTAR POR ID
    .route("/user/:id")
    .get((req, res) => userController.get(req, res));

router // DELETE POR ID
    .route("/user/:id")
    .delete((req, res) => userController.delete(req, res));

router // ATUALIZA POR ID
    .route("/user/:id")
    .put((req, res) => userController.update(req, res));

module.exports = router;
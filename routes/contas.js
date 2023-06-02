const router = require("express").Router()

const contaController = require("./../controllers/contaController");

router
    .route("/conta")
    .post((req, res) => contaController.create(req, res));

router
    .route("/conta")
    .get((req, res) => contaController.getAll(req, res));


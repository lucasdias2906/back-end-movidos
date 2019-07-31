"use strict"

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send({
        title: "Sistema de Cadastro da ONG Movidos.",
        version: "0.0.0",
        servidor: "LocalHost",
        company: "TransDigital",

    });
});


module.exports = router;
const express = require("express");
const router = express.Router();
const controller = require("../controller/register_controller")

router.get("/", controller.get)
router.post("/", controller.postRegister)
router.put("/", controller.putRegister)
router.delete("/", controller.deleteRegister)
router.delete("/", controller.deleteWithIdRegister)

module.exports = router;
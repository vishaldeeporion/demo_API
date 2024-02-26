const express = require('express');
const router = express.Router();
const { 
    createAPI, readAPI
} = require("../controllers/crud");

router.route("/").post(createAPI).get(readAPI);
router.route("/:key")

module.exports = router;
const express = require('express');
const router = express.Router();

const {getuser} = require("../controllers/user")

router.get("/", getuser)



module.exports = router;
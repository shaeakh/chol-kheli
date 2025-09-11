const express = require('express');
const router = express.Router();
const {check_From_Controller} = require("../middleware/check")

const {register,login} = require("../controllers/auth")

router.post("/register", check_From_Controller, register)
router.post("/login", check_From_Controller, login)


module.exports = router;
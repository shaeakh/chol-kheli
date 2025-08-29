const express = require('express');
const router = express.Router();

// Sample route
const userRoutes = require("../routes/user")
router.get('/user',userRoutes);

module.exports = router;
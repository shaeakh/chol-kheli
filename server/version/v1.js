const express = require('express');
const router = express.Router();
const {check_From_routes} = require("../middleware/check")
// Sample route
const authRoutes = require("../routes/auth")

router.use('/auth',check_From_routes,authRoutes);



module.exports = router;
const {getuser} = require("../models/user")


const getuser = (req, res) => {
    
    res.status(200).json({ message: "User fetched successfully" });
}
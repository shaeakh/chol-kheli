//dependencies
const express = require("express");
const cors = require("cors");

//database 
const {connectDB} = require("./config/pg");



//initialize app
const app = express();
app.use(express.json());
app.use(cors());



//middleware
const errorHandler = require("./middleware/errorHandler");
const test = require("./middleware/testing");
const {check_From_version} = require("./middleware/check")

//version
const verson1 = require("./version/v1")

app.use("/api/v1",errorHandler,check_From_version,verson1);

const PORT = process.env.PORT || 5000;
app.listen(PORT,async () => {
    await connectDB();
    console.log(`Server running on port ${PORT}`)
});

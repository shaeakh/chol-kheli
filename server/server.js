//dependencies
const express = require("express");
const cors = require("cors");

//initialize app
const app = express();
app.use(express.json());
app.use(cors());

//middleware
const errorHandler = require("./middleware/errorHandler");
const test = require("./middleware/testing");
app.use(test);
//version
const verson1 = require("./version/v1")

app.use("/api/v1",errorHandler, verson1);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


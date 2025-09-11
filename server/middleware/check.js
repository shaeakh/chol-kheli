const check_From_version = (req, res, next) => {
    console.log("Request check from /v1");
    next();
}

const check_From_routes = (req, res, next) => {
    console.log("/routes");
    next();
}

const check_From_Controller = (req, res, next) => {
    console.log("/controller");
    next();
}

const check_From_Model = (req, res, next) => {
    console.log("/model");
    next();
}


module.exports = {check_From_version, check_From_routes, check_From_Controller, check_From_Model};
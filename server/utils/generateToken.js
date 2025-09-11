const jwt = require('jsonwebtoken');

const ExpireOptions = {
    short: "15m",
    medium: "1h",
    long: "1d",
    avg_long: "7d",
    very_long: "30d"      
}

const generateToken = (reg_no,edu_mail,expiresIn) =>{
    return jwt.sign({reg_no,edu_mail},process.env.JWT_SECRET,{
        expiresIn: expiresIn || "1d"
    })
}

const get_user_info = (token)=>{
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        return {
            reg_no: decoded.reg_no,
            edu_mail: decoded.edu_mail
        }
    } catch (error) {
        console.error("Token verification error:",error)
        throw new Error("Invalid token")        
    }
}

module.exports = {generateToken,ExpireOptions,get_user_info};
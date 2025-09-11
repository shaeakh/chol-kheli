// external modules
const bcrypt = require('bcryptjs');


// modules 
const {get_user_by_login} = require("../models/user")
const {generateToken,ExpireOptions} = require("../utils/generateToken")


const login = async (req, res) => {
    const {edu_mail,password} = req.body

    // checking if there is any actual entry exists or not
    const response = await get_user_by_login(edu_mail,password)
    
    // getting the user result
    const user = response.result[0];

    // if there is no user found just return
    if (!user) {
        return res.status(401).json({ message: "user not found" });
    }

    // else : { process the login }

    // now check the password matches or not
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = generateToken(user.reg_no, user.edu_mail, ExpireOptions.medium);

    if (response.status) {
        return res.status(response.status).json({
            message: response.message,
            result: response.result,
            
        }).token = token;
    }

    if (token) {
        return res.status(200).json({
            message: "Login successful",
            result: response.result,
        }).token = token;
    }
}
const register = async (req, res) => {
    const {reg_no,name,edu_mail,phone,password,department ,user_pic_url} = req.body

    if(!reg_no || !name || !edu_mail || !phone || !password || !department || !user_pic_url){
        return res.status(400).json({message:"All fields are required"})
    }

    const user = get_user_by_info({reg_no,edu_mail,phone})
    if(user){
        return res.status(400).json(
            {
                message:"User already exists",
                user : user
            }
        )
    }

    // const {data,error} = await supabase.from("users").insert({
    //     reg_no,
    //     name,
    //     edu_mail,
    //     phone,
    //     password,
    //     department,
    //     user_pic_url
    // })
    
    if(error){
        return res.status(400).json({error})
    }

    return res.status(200).json({message:"User registered successfully",data})
}

module.exports = {
    login,
    register
}

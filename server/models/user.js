const {pool} = require("../config/pg")
const {Query} = require("../utils/doQuery")
const get_users = async (req,res) => {
    try {
        const { rows } = await Query('SELECT * FROM users');
        return rows;
    } catch (error) {
        console.error('Unexpected error:', error);
        return error;
    }   
}

const get_user_by_login = async(edu_mail,password)=>{    

    if(!edu_mail || !password){
        return {
            status: 400,
            message: "Email and password are required"
        }
    }

    const query = 'SELECT * FROM users WHERE edu_mail = $1 LIMIT 1';
    const values = [edu_mail];

    const response = await Query(query, values);

    return response;
    
}

// const get_user_by_login = async(req,res)=>{
//     const {edu_mail,password} = req.body

//     if(!edu_mail || !password){
//         return {
//             status: 400,
//             message: "Email and password are required"
//         }
//     }

//     try {
//         const query = 'SELECT * FROM users WHERE edu_mail = $1 LIMIT 1';
//         const values = [edu_mail];        
//         const { rows } = await pool.query(query, values);
//         if (rows.length === 0) {
//             return res.status(401).json({ message: "Invalid email or password" });
//         }
//         const user = rows[0];
//         return res.status(200).json({ message: "Login successful", user });
//     } catch (error) {
//         console.error("Login error:", error);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// }

const get_user_by_info = async (reg_no,edu_mail,phone)=>{
    try {
        // checking reg_no 
        const user1 = await sql`SELECT * FROM users WHERE reg_no = ${reg_no}`
        if(user1){
            console.log("this is from user1",user1)
            return user1
        }
        // checking edu_mail  
        const user2 = await sql`SELECT * FROM users WHERE edu_mail = ${edu_mail}`
        if(user2){
            console.log("this is from user2",user2)
            return user2
        }
        // checking phone  
        const user3 = await sql`SELECT * FROM users WHERE phone = ${phone}`
        if(user3){
            console.log("this is from user3",user3)
            return user3
        }  

        if (user1 || user2 || user3) {
            console.error('Error fetching users:', user1 || user2 || user3);
            return user1 || user2 || user3;
        }                
        return null;    
    } catch (error) {
        console.error('Unexpected error:', error);
        return error;
    }   
}   

module.exports = {get_users,get_user_by_info,get_user_by_login}
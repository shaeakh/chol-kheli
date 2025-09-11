const {pool} = require("../config/pg")

const Query = async (query, values) => {
    try {
        const { rows } = await pool.query(query, values);
        if (rows.length === 0) {
            return { status: 404, message: "No results found" , result: []};
        }
        return { status: 200, message: "Query successful", result : rows };
    } catch (error) {
        return { status: 500, message: "Database query error", result : error };
    }    
}
module.exports = { Query };
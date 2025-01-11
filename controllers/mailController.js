const { agenda } = require("../utils/database");

const  mailController =(req,res)=>{
    try {
        agenda.schedule("in 2 minutes", "Scheduler-Nish",req.body);
        return res.status(201).json({message:"Email scheduled successfully"});  
    } catch (error) {
        console.log(error)
    }

}
module.exports={mailController};
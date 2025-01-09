const { agenda } = require("../utils/database");


// scheduling with agenda... - change time in first parametre .. according to the need
// can also add it dynamic and ask to user for wen to send
const  mailController =(req,res)=>{
    try {
        agenda.schedule("in 2 minutes", "Scheduler-Nish",req.body); // schedule email to be sent after an hour
        return res.status(201).json({message:"Email scheduled successfully"});  
    } catch (error) {
        console.log(error)
    }

}
module.exports={mailController};
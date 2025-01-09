const { Agenda } = require("@hokify/agenda")
const { sendMail } = require("./nodeMailer")


//creating agenda here
const agenda = new Agenda({
    db : {
        address : "mongodb+srv://learnnode-username:learnmongodb1@learnnode-cluster.jpymb.mongodb.net/Scheduler-Nish"
    }
});

//implementing IIFE function - Immediately Invoked Function Expression - basically cunction calls itself immediately after defining itself
(async function () {
    await agenda.start(); // starting agenda

    //defining email job
    agenda.define("Scheduler-Nish", async (job) => {
        await sendMail(job.attrs.data);
    })
})();


module.exports = { 
    agenda
}
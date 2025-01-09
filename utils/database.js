const { Agenda } = require("@hokify/agenda")
const { sendMail } = require("./nodeMailer")


const { DBURL } = process.env;
//creating agenda here
const agenda = new Agenda({
    db : {
        address : DBURL
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
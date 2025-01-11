const nodeMailer = require("nodemailer")
const {USER,PASS} = process.env;



//creating transport here
const transporter = nodeMailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: USER,
        pass: PASS
    }
});

//function to send mails
const sendMail= async ({
    emailAddress,
    emailBody,
    subject
}) => {
    try {
        const mailOptions = {
            from: USER,
            to:"rajput123n@gmail.com",
            subject:subject,
            text:emailBody
        }
        await transporter.sendMail(mailOptions)
    } catch (err) {
        console.error(err);
    }
}


module.exports = {
    sendMail
}
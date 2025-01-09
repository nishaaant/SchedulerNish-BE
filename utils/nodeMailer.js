const nodeMailer = require("nodemailer")



//creating transport here
const transporter = nodeMailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'verlie.hudson@ethereal.email',
        pass: 'UGw8XFDaYnF9e9Nqzu'
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
            from:user,
            to:emailAddress,
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
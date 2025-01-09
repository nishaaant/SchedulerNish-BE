// function to test if all values are valid
const validInput = ({ emailAddress, time, emailBody, subject }) => {
    const errObj = {}
    if (!isValidEmail(emailAddress)) errObj.emailError = "Please enter valid email address (eg abc@gmail.com)";
    if (!emailBody) errObj.emailBodyError = "Please enter email body";
    if (!subject) errObj.subjectError = "Please enter subject";
    if (!isValidTime(time)) errObj.timeError = "Please enter current time(HH:MM:SS)";
    if(Object.keys(errObj).length) return [false,errObj];
    return [true, "All fields are valid"];
}

// function to test email is valid
const isValidEmail = (email) => {
    if ((/^[\w-\.]+@[\w]+\.[a-zA-Z]{2,4}$/).test(email)) return true;
    return false
}

// function to test time is valid
const isValidTime = (time) => {
    if ((/^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/).test(time)) return true;
    return false
}
  
module.exports = {validInput}
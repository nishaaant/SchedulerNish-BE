const mongoose = require("mongoose")
var validator = require('validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    emailID : {
        type : String,
        required : true,
        lowercase : true,
        trim : true,
        minlength: 8,
        maxLength : 20,
        unique : true,
        validate(value){
            if(!validator.isEmail(value)){throw new Error ("invalid Email ID")}
        }
    },
    password : {
        type : String,
        required : true,
        trim : true,
        validate(value){
            if(!validator.isStrongPassword(value)){throw new Error ("try to keep a strong password")}
        }
    }
},
{timestamps : true}
)

//user Schema Methods

//login jwt token 

userSchema.methods.getJWT = async function () {
    const user = this;
    
    const token = jwt.sign({_id : user._id}, process.env.JWT_TOKEN , {expiresIn : '7d'});

    return token;
}

//login password validation

userSchema.methods.validatePassword = async function(passwordEnteredByUser) {
    const passwordHash = this.password;

    const isPasswordCorrect = await bcrypt.compare(passwordEnteredByUser,passwordHash)

    return isPasswordCorrect;
}


//exported schema via User Model
module.exports = mongoose.model("User", userSchema );
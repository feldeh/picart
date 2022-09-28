const mongoose  =require('mongoose')
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
 
    email: {type: String, required: true},
    password: {type: String, required: true}
})



userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
}; 

const User = mongoose.model("user", userSchema)

const validate = async (data) => {
    console.log('this is data efore joi ' + data.email +  " " + data.password);
    const schema = joi.object({
       
        email:     joi.string().email().required().label("Email"),
        password:  passwordComplexity().required().label("Password")
    })
    console.log("this is schema: " + await schema.validate(data) );
    return await schema.validate(data)
}

module.exports = {User, validate};
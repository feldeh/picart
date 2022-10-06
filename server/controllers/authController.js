const {User}  = require ("../model/user.model");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


const handleLogin = async (req, res) => {
    try {

        //check for error
        const {error} = validate(req.body);
        if (error){
            return res.status(400).json({message: error.details[0].message});
        }

        //check if user exists 
        const user = await User.findOne({email: req.body.email})
        console.log(user)
        console.log(user.email)
        if(!user) {
            return res.status.apply(401).send({message: "invalid email or password"})
        }else{

        }

        //check if password valid
        const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);

        if(!validPassword){
            return res.status(401).json({message: "Invalid Email or Password"});
        }

        // create and sign JWT token with user.email
        const accessToken = jwt.sign(
            {
                "email": user.email 
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '10m' }
        )

        res.status(200).json({ accessToken, message: "logged in successfully" });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" });
    }
};



const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};


const handleLogout = (req, res) => {
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(204) //No content
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
    res.json({ message: 'Cookie cleared' })
}

module.exports = {
    handleLogin,
    handleLogout
}

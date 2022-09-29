const {User}  = require ("../model/user");
const Joi = require("joi");


exports.handleLogin = async (req, res) => {
    try {

        //check for error
        const {error} = validate(req.body);
        if (error){
            return res.status(400).send({message: error.details[0].message});
        }

        //check if user exists 
        const user = await User.findOne({email: req.body.email})
        if(!user) {
            return res.status.apply(401).send({message: "invalid email or password"})
        }

        //check if password valid
        const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);

        if(!validPassword){
            return res.status(401).send({message: "Invalid Email or Password"});
        }

        const token = user.generateAuthToken();
        res.status(200).send({ data: token, message: "logged in successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
};

const validate = (data) => {
    console.log("jooooi")
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

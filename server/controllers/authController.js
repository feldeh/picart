const {User}  = require ("../model/user");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');


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
            return res.status.apply(401).json({message: "invalid email or password"})
        }

        //check if password valid
        const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);

        if(!validPassword){
            return res.status(401).json({message: "Invalid Email or Password"});
        }

        // sign JWT token with user.email
        const accessToken = jwt.sign(
            {
                "email": user.email 
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '10s' }
        )

        const refreshToken = jwt.sign(
            {
                "email": user.email
            }, 
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d'}
        )

        res.cookie('accessToken', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            // cookie expiry: set to match refreshToken
            maxAge: 24 * 60 * 60 * 1000
        })

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

const handleRefresh = (req, res) => {
    const cookies = req.cookies

    if (!cookies?.jwt) return res.status(401).json({ message: 'Unauthorized' })

    const refreshToken = cookies.jwt

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        asyncHandler(async (err, decoded) => {
            console.log(decoded)
            console.log(decoded.email)
            // catch error from the verify process
            if (err) return res.status(403).json({ message: 'Forbidden' })
            // check if the email from the decoded email that should be inside of the refresh token exist in the db
            const foundUser = await User.findOne({ email: decoded.email }).exec()

            if (!foundUser) return res.status(401).json({ message: 'Unauthorized' })

            const accessToken = jwt.sign(
                {
                    "email": user.email 
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '10s' }
            )

            res.json({ accessToken })
        })
    )
}

const handleLogout = (req, res) => {
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(204) //No content
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
    res.json({ message: 'Cookie cleared' })
}

module.exports = {
    handleLogin,
    handleRefresh,
    handleLogout
}
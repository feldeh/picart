const  Saves = require('../model/saved.model')
const  express= require('express');
const {User} = require('../model/user.model');
const pictures=  require('../model/pictures.model')
const asyncHandler = require('express-async-handler')
const auth = require('./authController')
const verifyJWT = require('../middelwares/verifyJWT')


// @desc Get all notes 
// @route GET /notes
// @access Private


const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const getAllSaves = asyncHandler(verifyJWT, async (req, res, next) => {
    console.log("getAll gets called");
    const saves = await Saves.find().lean();
    const pics = await pictures.find()



    

     // If no notes 
    if (!saves?.length) {
    return res.status(400).json({ message: 'No saved posts found' })
    }

    console.log('req header '  + req.email);
    console.log("this is request body in saved : " + req.headers['x-access-token']);
   // res.json(req.body)
    // res.json({ userEmail : email})
    // console.log("user email "  + email);
})



// @desc Create new note
// @route POST /notes
// @access Private

const createSave= asyncHandler(async (req, res) => {
 //   const {email, url, alt}= req.body;

    // if (!url || !alt || !email){
    //     return res.status(400).json({ message: 'not enough fields' })
    // }

    // const checkDuplicate = await Saves.findOne({url}).lean().exec();

    // if (duplicate) {
    //     return res.status(409).json({ message: 'Duplicate url' })
    // }

    console.log('called saves');
     await new Saves({ user: "633ea7aaffdfa0845fc0da32", url: "https://www.pexels.com/photo/sliced-bread-with-white-cream-on-white-ceramic-plate-13636706/", alt: "Free stock photo of breakfast, pancakes"}).save()
    
    res.send('addedd')
})


module.exports = {
    getAllSaves,
    createSave
}
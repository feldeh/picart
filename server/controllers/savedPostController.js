const Saves = require('../model/saved.model');
const { User } = require('../model/user.model');
const pictures = require('../model/pictures.model');
const asyncHandler = require('express-async-handler');

// @desc Get all notes
// @route GET /notes
// @access Private

const getAllSaves = asyncHandler(async (req, res) => {
  const saves = await Saves.find().lean();
  const pics = await pictures.find({});
  console.log(pics);

  // If no notes
  if (!saves?.length) {
    return res.status(400).json({ message: 'No saved posts found' });
  }

  res.send(pics);
  // res.json({ userEmail : email})
  // console.log("user email "  + email);
});

// @desc Create new note
// @route POST /notes
// @access Private

const createSave = asyncHandler(async (req, res) => {
  //   const {email, url, alt}= req.body;

  // if (!url || !alt || !email){
  //     return res.status(400).json({ message: 'not enough fields' })
  // }

  // const checkDuplicate = await Saves.findOne({url}).lean().exec();

  // if (duplicate) {
  //     return res.status(409).json({ message: 'Duplicate url' })
  // }

  console.log('called saves');
  await new Saves({
    user: '633ea7aaffdfa0845fc0da32',
    url: 'https://www.pexels.com/photo/sliced-bread-with-white-cream-on-white-ceramic-plate-13636706/',
    alt: 'Free stock photo of breakfast, pancakes',
  }).save();

  res.send('addedd');
});

module.exports = {
  getAllSaves,
  createSave,
};

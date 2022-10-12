const Saves = require('../model/saved.model');
const express = require('express');
const { User } = require('../model/user.model');
const pictures = require('../model/pictures.model');
const asyncHandler = require('express-async-handler');
const auth = require('./authController');
const verifyJWT = require('../middelwares/verifyJWT');
const jwt = require('jsonwebtoken');
const { trusted } = require('mongoose');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(verifyJWT);

// @desc Get all notes
// @route GET /notes
// @access Private

const getAllSaves = asyncHandler(async (req, res) => {
  // const saves = await Saves.find().lean();
  // const pics = await pictures.find({});

  verifyJWT(req, res);
  console.log('getAll gets called');
  const saves = await Saves.find({ user: req.email }).lean();
  const pics = await pictures.find({});

  res.json(saves);
});

// @desc Create new note
// @route POST /notes
// @access Private

const createSave = asyncHandler(async (req, res, next) => {
  verifyJWT(req, res, next);
  console.log('request email : ' + req.email);
  console.log('called saves');
  await new Saves({
    user: req.email,
    url: 'https://www.pexels.com/photo/sliced-bread-with-white-cream-on-white-ceramic-plate-13636706/',
    alt: 'Free stock photo of breakfast, pancakes',
  }).save();

  res.send('addedd');
});

module.exports = {
  getAllSaves,
  createSave,
};

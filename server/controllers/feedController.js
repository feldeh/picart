const express = require('express');
const pictures = require('../model/pictures.model');
const asyncHandler = require('express-async-handler');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// @desc Get all notes
// @route GET /notes
// @access Private

const getAllFeed = asyncHandler(async (req, res) => {
  // const saves = await Saves.find().lean();
  // const pics = await pictures.find({});

  const picture = await pictures.find({});

  res.json(picture);
});

// @desc Create new note
// @route POST /notes
// @access Private

module.exports = {
  getAllFeed,
};

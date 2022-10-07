const express = require('express')
const router = express.Router()
const savedPostController = require('../controllers/savedPostController')

router.route('/')
    .get(savedPostController.getAllSaves)
    .post(savedPostController.createSave)
module.exports = router
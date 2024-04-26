const express = require('express');
const router = express.Router();

const questionsController = require('../../../controllers/api/v1/question_controllers');
const optionsController = require('../../../controllers/api/v1/option_controllers');

router.post('/create',questionsController.create); //create question
router.delete('/:id/delete',questionsController.delete); //delete questtion
router.get('/:id',questionsController.getQuestion); //get question object | details

router.post('/:id/options/create',optionsController.create); //create options

module.exports = router;
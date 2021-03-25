const express = require('express');
const asyncHandler = require('express-async-handler');
const sampleController = require('../controllers/sampleController');
const pathwayController = require('../controllers/getPathData');
const questionsController = require('../controllers/getQuestionsRoute');
const router = express.Router();

router.get('/sample',asyncHandler(sampleController));
router.get('/path/:pathname',asyncHandler(pathwayController));
router.get('/questions',asyncHandler(questionsController));

module.exports = router;



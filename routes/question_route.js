const { deserialize } = require('bson');
const express = require('express');
const { createQues, createOption, delQues, getQues, delOption } = require('../controller/question_controller');
const router = express.Router();

//get the ques details
router.route('/question/:id').get(getQues);
// create a question
router.route('/question/create').post(createQues);

// to delete a question and all its option
router.route('/question/remove/:id').delete(delQues);
// router.route('')

module.exports = router;
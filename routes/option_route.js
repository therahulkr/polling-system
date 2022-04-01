const express = require('express');
const { createOption, delOption, addVote } = require('../controller/option_controller');
const router = express.Router();


// for create and delete the option to a option
router.route('/option/:id')
.post(createOption)
.delete(delOption);

router.route('/option/addvote/:id').get(addVote);

module.exports = router;
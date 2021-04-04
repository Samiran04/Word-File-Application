const express = require('express');
const router = express.Router();
const passport = require('passport');

const notes_controller = require('../controllers/notes_controller');

router.get('/get-notes',passport.checkAuthentication , notes_controller.notes);
router.post('/save/:id', notes_controller.edit);

module.exports = router;
const express = require('express');
const router = express.Router();
const passport = require('passport');

const notes_controller = require('../controllers/notes_controller');

router.get('/get-notes/:id',passport.checkAuthentication , notes_controller.notes);
router.post('/save/:id',passport.checkAuthentication, notes_controller.edit);
router.get('/create-new',passport.checkAuthentication, notes_controller.newNotes)

module.exports = router;
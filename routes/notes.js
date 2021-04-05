const express = require('express');
const router = express.Router();
const passport = require('passport');

const notes_controller = require('../controllers/notes_controller');

router.get('/get-notes/:id', passport.checkAuthentication , notes_controller.notes);
router.post('/save/:id', passport.checkAuthentication, notes_controller.edit);
router.post('/create-new', passport.checkAuthentication, notes_controller.newNotes);
router.get('/delete-notes', passport.checkAuthentication, notes_controller.delete);

module.exports = router;
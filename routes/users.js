const express = require('express');
const router = express.Router();
const passport = require('passport');

const users_controller = require('../controllers/users_controller');

router.get('/sign-in', users_controller.signIn);
router.get('/sign-up', users_controller.signUp);
router.get('/log-out', users_controller.distroySession);

router.post('/create', users_controller.create);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), users_controller.createSession);

module.exports = router;
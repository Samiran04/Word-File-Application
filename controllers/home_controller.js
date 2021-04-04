const User = require('../models/user');

module.exports.home = async function(req, res){

    let user = await User.findById(req.user._id);

    return res.render('home', {
        user: user
    });
}
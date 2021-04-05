const User = require('../models/user');

module.exports.home = async function(req, res){

    try{
        let user

        if(req.user)
            user = await User.findById(req.user._id).populate('notes');

        return res.render('home', {
            user: user
        });
    }
    catch(err){
        console.log(err);
        return;
    }
}
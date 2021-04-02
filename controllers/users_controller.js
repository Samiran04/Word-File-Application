const User = require('../models/user');

module.exports.signIn = function(req, res){
    return res.render('signIn');
}

module.exports.signUp = function(req, res){
    return res.render('signUp');
}

module.exports.create = async function(req, res){

    try{
        console.log('************HERE');
        if(req.body.password != req.body.confirm)
        {
            return res.redirect('back');
        }

        let user = await User.findOne({email: req.body.email});

        if(!user)
        {
            let newUser = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            console.log(newUser)
        }

        return res.redirect('/users/sign-in');
    }catch(err){
        console.log(err);
        return;
    }
}

module.exports.createSession = function(req, res){
    console.log('HERE');
    return res.redirect('/');
}
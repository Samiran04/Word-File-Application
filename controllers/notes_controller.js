const Note = require('../models/note');
const User = require('../models/user');

module.exports.notes = async function(req, res){

    try{
        let notes = await Note.findOne({user: req.user._id});

        return res.render('my_notes',{
            notes: notes
        });
    }catch(err){
        console.log(err);
        return;
    }
}

module.exports.newNotes = async function(req, res){
    try{
        let notes = await Note.create({user: req.user._id, text: "Type Here..."});
        let user = await User.findByIdAndUpdate(req.user._id, {
            $push: {notes: notes}
        });
    }catch(err){
        console.log(err);
        return;
    }
}

module.exports.edit = async function(req, res){

    try{
        if(req.body.content != "")
        {
            let notes = await Note.findByIdAndUpdate(req.params.id, {
                $set: {text: req.body.content}
            });

            return res.redirect('back');
        }
    }catch(err){
        console.log(err);
        return;
    }
}
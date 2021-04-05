const Note = require('../models/note');
const User = require('../models/user');

module.exports.notes = async function(req, res){

    try{
        let notes = await Note.findById(req.params.id);

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
        let notes = await Note.create({user: req.user._id, text: "Type Here...", name: req.body.name});
        let user = await User.findByIdAndUpdate(req.user._id, {
            $push: {notes: notes}
        });

        return res.redirect('back');
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

module.exports.delete = async function(req, res){

    try{

        if(req.query.userId != req.user._id)
            return res.json(500, {
                message: 'Invalid user'
            });

        await Note.findByIdAndDelete(req.query.id);

        await User.findByIdAndUpdate(req.query.userId, {
            $pull: {notes: req.query.id}
        });

        return res.redirect('back');

    }catch(err){
        console.log(err);
        return;
    }

}
const Note = require('../models/note');

module.exports.edit = async function(req, res){

    try{
        if(req.body.content != "")
        {
            let notes = await Note.create({text: req.body.content});

            return res.redirect('back');
        }
    }catch(err){
        console.log(err);
        return;
    }
}
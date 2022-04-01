const Question = require('../models/question');
const Option = require('../models/option');

// question created
exports.createQues = async(req,res,next)=>{
    let question = {
        title : req.body.title
    };

    await Question.create(question);

    return res.status(201).json({
        success : true,
        message : "question created successfully",
        question
    })
}



// delete a question from the database
exports.delQues = async(req,res,next)=>{
    await Question.findByIdAndDelete(req.params.id);
    let options = await Option.find();
    for(option of options){
        if(option.parent.toString()===req.params.id.toString()){
            await Option.findByIdAndDelete(option._id);
        }
    }
    res.status(200).json({
        success:true,
        message : "question deleted and all its associate options are deleted too" 
    })
}

//get the question with all it's options
exports.getQues = async(req,res,next)=>{
    let ques = await Question.findById(req.params.id);
    let options = await Option.find();

    let option_are = [];
    var i = 0;
    for(option of options){
        if(option.parent.toString()===req.params.id.toString()){
            option_are[i++] = option;
        }
    }

    res.status(200).json({
        success:true,
        question : ques,
        options : option_are
    })
}


const Option = require('../models/option');


//delete a option of a ques 
exports.delOption = async(req,res,next)=>{
    await Option.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success : true,
        message : "option deleted successfully"
    })
}

// add vote to any option
exports.addVote = async(req,res,next)=>{
    let optn = await Option.findById(req.params.id);
    optn.votes += 1;
    await Option.findByIdAndUpdate(req.params.id,optn);
    console.log(optn)
    res.status(200).json({
        success : true,
        message : "your vote has been count"
    })
}

// create a option to a particular question
exports.createOption = async(req,res,next)=>{
    console.log(req.body);
    console.log(req.params.id);
    
    let opt = await Option.create({
        text : req.body.text,
        parent : req.params.id
    })

    opt.voteLink = `http://localhost:8000/api/v1/option/addvote/${opt._id}`;
    await Option.findByIdAndUpdate(opt._id,opt);
    res.status(201).json({
        success:true,
        message : "option created"

    })
}
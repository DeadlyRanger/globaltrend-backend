import Task from "../models/Task.js";

// CREATE
export const createTask = async(req,res)=>{
  try{

    const {Title,Description,Status} = req.body;

    const task = await Task.create({
      Title,
      Description,
      Status,
      user:req.user.id
    });

    res.status(201).json({
      success:true,
      task
    });

  }catch(error){
    res.status(400).json({success:false,message:error.message});
  }
};

// GET MY TASKS
export const alltask = async(req,res)=>{
  try{

    const tasks = await Task.find({ user:req.user.id });

    res.json({success:true,tasks});

  }catch(error){
    res.json({success:false,message:error.message});
  }
};

// GET SINGLE
export const taskDetails = async(req,res)=>{
  try{

    const task = await Task.findOne({
      _id:req.params.id,
      user:req.user.id
    });

    if(!task) return res.status(404).json({message:"Not found"});

    res.json({success:true,task});

  }catch(error){
    res.json({success:false,message:error.message});
  }
};

// UPDATE
export const taskUpdate = async(req,res)=>{
  try{

    const task = await Task.findOneAndUpdate(
      {_id:req.params.id,user:req.user.id},
      req.body,
      {new:true}
    );

    if(!task) return res.status(404).json({message:"Not authorized"});

    res.json({success:true,task});

  }catch(error){
    res.json({success:false,message:error.message});
  }
};

// DELETE
export const taskdelete = async(req,res)=>{
  try{

    const task = await Task.findOneAndDelete({
      _id:req.params.id,
      user:req.user.id
    });

    if(!task) return res.status(404).json({message:"Not authorized"});

    res.json({success:true,message:"Deleted"});

  }catch(error){
    res.json({success:false,message:error.message});
  }
};

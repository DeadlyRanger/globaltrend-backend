import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({

  Title:{
    type:String,
    minlength:5,
    maxlength:50,
    required:true
  },

  Description:{
    type:String,
    minlength:3,
    maxlength:500,
    required:true
  },

  Status:{
    type:String,
    enum:["task initiated","in progress","completed"],
    default:"task initiated"
  },

  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  }

},{timestamps:true});

export default mongoose.model("Task", taskSchema);

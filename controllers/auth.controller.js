import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async(req,res)=>{
  const {name,email,password} = req.body;

  const user = await User.create({name,email,password});

  res.json({success:true,user});
};

export const login = async(req,res)=>{
  const {email,password} = req.body;

  const user = await User.findOne({email});

  if(!user) return res.json({message:"User not found"});

  const match = await bcrypt.compare(password,user.password);

  if(!match) return res.json({message:"Invalid password"});

  const token = jwt.sign({id:user._id},process.env.JWT_SECRET);

  res.json({success:true,token});
};

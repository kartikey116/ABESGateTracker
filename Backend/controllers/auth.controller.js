import express from "express";
import bcrypt from "bcryptjs";

const register = async (req,res) => {
    const{name,email,password,role} = req.body;

    const exist = await User.findOne({email});
    if(exist){
        return res.status(404).json({message:"Email already exists"});
    }

    const hash = await bcrypt.hash(password,10);

    const user = await User.create({
        name,
        email,
        password:hash,
        role
    });

    return res.json({message:"User created successfully",user});

};


const login  = async (req,res) => {
    const{email,password} = req.body;
    
    const user = await User.findOne({email});
    if(!user){
        return res.status(404).json({message:"Invalid email or password"});
    }

    const match = await bcrypt.compare(password,user.password);
    if(!match){
        return res.status(404).json({message:"Invalid email or password"});
    }

    const token = generateToken(user._id,user.role);
    res.cookie("token" , token, {
        httpOnly:true,
        secure:false,
        sameSite:"strict"
    })

    return res.json({message:"Login successful",user});
};
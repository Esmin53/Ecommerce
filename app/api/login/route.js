import connect from "@/app/db/connect";
import  User  from "@/app/models/User";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export async function POST(request) {
    try {
        connect();
        const {email, password} = await request.json();

        console.log(email, password)

       if(!email || !password) {
        return NextResponse.json("Please provide all required information!");
       }

       const user = await User.findOne({email: email})

       if(!user) {
        return NextResponse.json("The username or password you have entered is invalid!");
       }

       const isMatch = await bcrypt.compare(password, user.password);

       if(!isMatch) {
        return NextResponse.json("The username or password you have entered is invalid!");
       }

       const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME});

       const data = {...user._doc};
       delete data.password;
       
       console.log(data)
        return NextResponse.json({data, token});
    } catch (error) {
        console.log(error)
        return NextResponse.json(error);
    }
};
import connect from "@/app/db/connect";
import { User } from "@/app/models/User";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request) {
    try {
        connect();
        const {fullname, username, email, password} = await request.json();

       if(!fullname || !username || !email || !password) {
        return NextResponse.json("Please provide all required information!");
       }

       const user = await User.findOne({
        $or: [{username: username}, {email: email}]
       })

       if(user) {
        return NextResponse.json("User with that username or email already exists!");
       }

       const newuser = await User.create({
        fullname, username, email, password
       })
    
        return NextResponse.json("success");
    } catch (error) {
        console.log("Error")
        console.log(error)
    }
};
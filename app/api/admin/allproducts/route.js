import connect from "@/app/db/connect";
import  Product  from "@/app/models/Product";
import { NextResponse, NextRequest } from "next/server";


export async function GET(request) {
    try {
        connect();

        const products = await Product.find({})

        
        return NextResponse.json({products});
    } catch (error) {
        console.log(error)
        return NextResponse.json(error);
    }
};
import connect from "@/app/db/connect";
import  Product  from "@/app/models/Product";
import { NextResponse, NextRequest } from "next/server";


export async function POST(request) {
    try {
        connect();
        const {title, price, brand, category, color, shipping, description, image} = await request.json();

        const product = await Product.create({
            title, price, brand, category, color, shipping, description, image
        })

        
        return NextResponse.json({msg: "Created New Product"});
    } catch (error) {
        console.log(error)
        return NextResponse.json(error);
    }
};
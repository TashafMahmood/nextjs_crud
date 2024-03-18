import { ConnectionString } from "@/app/lib/db";
import { User } from "@/app/lib/model/userModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
    await mongoose.connect(ConnectionString)
    const data = await User.find()
    return NextResponse.json({ result: data, success: true }, { status: 200 })
}
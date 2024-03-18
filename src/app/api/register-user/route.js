import { ConnectionString } from "@/app/lib/db";
import { User } from "@/app/lib/model/userModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    const payload = await request.json()
    await mongoose.connect(ConnectionString)
    let userData = new User(payload)
    const result = await userData.save();
    return NextResponse.json({ result: "User added successfully", success: true }, { status: 201 })
}


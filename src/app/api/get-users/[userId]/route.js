import { ConnectionString } from "@/app/lib/db"
import { User } from "@/app/lib/model/userModel"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function GET(request, content) {
    const id = content.params.userId
    await mongoose.connect(ConnectionString)
    const data = await User.findById(id)
    return NextResponse.json({ result: data, success: true }, { status: 200 })
}

export async function PUT(request, content) {
    const id = content.params.userId
    const filter = { _id: id }
    const payload = await request.json()
    await mongoose.connect(ConnectionString)
    const data = await User.findOneAndUpdate(filter, payload)
    return NextResponse.json({ result: "user updated successfully", success: true }, { status: 200 })
}

export async function DELETE(request, content) {
    const id = content.params.userId
    await mongoose.connect(ConnectionString)
    const data = await User.findByIdAndDelete(id)
    return NextResponse.json({ result: data, success: true }, { status: 200 })
}
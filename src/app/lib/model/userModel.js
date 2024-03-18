import mongoose from "mongoose";

const userModel = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
})

export const User = mongoose.models.users || mongoose.model('users', userModel)
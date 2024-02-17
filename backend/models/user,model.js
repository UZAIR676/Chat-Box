import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"] 
    },
    profilePicture: { 
        type: String,
        default: ""
    }
});

const User = model("User", userSchema); 

export default User;

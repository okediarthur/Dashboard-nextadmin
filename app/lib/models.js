import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        username: {
            type: string,
            required: true,
            unique: true,
            min: 3,
            max: 20,
        },
        email: {
            type: string,
            required: true,
            unique: true,
        },
        password: {
            type: string,
            required: true,
        },
        img: {
            type: string,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        phone: {
            type: String, 
        },
        address: {
            type: string,
        },

    },
    { timestamps: true }
);
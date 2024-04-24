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


const campaignSchema = new mongoose.Schema({
        title: {
            type: string,
            required: true,
            unique: true,
        },
        desc: {
            type: string,
            required: true,
        },
        region: {
            type: string,
            required: true,
        },
        Dept: {
            type: string,
            required: true,
        },
        duration: {
            type: string,
            required: true,
            min: 0,
        },
        EndDate: {
            type: string,
            required: true,
            min: 0,
        },
        img: {
            type: string,
        },

    },
    { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User",userScehma)
export const Campaign = mongoose.models.Campaign || mongoose.model("Campaign",campaignScehma)
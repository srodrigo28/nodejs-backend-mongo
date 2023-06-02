const mongoose = require("mongoose");
const { Schema } = mongoose;

// const serviceSchema = new mongoose.Schema
const userSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        senha: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = {
    User,
    userSchema,
};
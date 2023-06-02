const mongoose = require("mongoose")

const { Schema } = mongoose

// const serviceSchema = new mongoose.Schema
const serviceSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    },
},
{ timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = {
    Service,
    serviceSchema
}
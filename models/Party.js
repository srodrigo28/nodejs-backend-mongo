const mongoose = require("mongoose")
const { Schema } = mongoose

const { serviceSchema } = require("./Service")

const partySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    services: {
        type: [serviceSchema]
    },
},
{timestamps : true }
)

const Party = mongoose = mongoose.model("Party", partySchema)

module.exports = Party
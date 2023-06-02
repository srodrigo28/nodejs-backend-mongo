const mongoose = require("mongoose")
const { Schema } = mongoose

const { serviceSchema } = require("./Service")

const partySchema = new Schema({
    title: String,
    author: String,
    description: String,
    budget: String,
    image: String,
    services: {
        type: [serviceSchema]
    },
},
);

const Party = mongoose = mongoose.model("Party", partySchema)

module.exports = Party
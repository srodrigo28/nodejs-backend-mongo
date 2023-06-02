const mongoose = require('mongoose');
const { Schema } = mongoose;

const contaSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    valor: {
        type: String,
        required: true,
    },
    vencimento: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
},
    { timestamps: true }
);
const Conta = mongoose.model("Conta", contaSchema);

module.exports = { Conta, contaSchema }

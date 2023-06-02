const { Conta: ContaModel } = require('./../models/Conta');

const contaController = {
    create: async (req, res) => {
        try {
            const conta = {
                nome: req.body.nome,
                descricao: req.body.descricao,
                valor: req.body.valor,
                vencimento: req.body.vencimento,
                status: req.body.status,
            };
            const response = await ContaModel.create(conta);

            res.status(201).json({ response, msg: "Adicionado com sucesso! " });
        } catch (error) {
            console.log(error);
        }
    },
    getAll: async (__, res) => {
        try {
            const conta = await ContaModel.find()

            res.json(conta)
        } catch (error) {
            console.log(error)
        }
    }
};

module.exports = contaController
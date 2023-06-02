const { User: UserModel } = require("./../models/User");

const UserController = {
    create: async (req, res) => {
        try {
            const user = {
                name: req.body.name,
                email: req.body.email,
                senha: req.body.senha,
            };

            const response = await UserModel.create(user);

            res.status(201).json({ response, msg: "Adicionado com sucesso!" });
        } catch (error) {
            console.log(error);
        }
    },
    getAll: async (__, res) => {
        try {
            const user = await UserModel.find()

            res.json(user);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id
            const user = await UserModel.findById(id)

            if (!user) {
                res.status(404).json({ msg: "Não foi possivel excluir!" });
                return
            }

            const deleteUser = await UserModel.findByIdAndRemove(id);
            
            res.status(200).json({deleteUser, msg: "Não foi possivel excluir!" });
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        const id = req.params.id;
        // 1. Passo. Recebe os dados
        const user = {
            name: req.body.name,
            email: req.body.email,
            senha: req.body.senha,
        };

        const updatedUser = await UserModel.findByIdAndUpdate(id, user);

        // 2. Passo. caso não encontrado
        if (!updatedUser) {
            res.status(404).json({ msg: "Serviço não pode ser atualizado!" });
            return;
        }

        // 3. Passo. atualiza caso tenha achado os dados
        res.status(200).json({ user, msg: "Usuário: atualizado com sucesso." });
    }
};
module.exports = UserController;

/**
 *
    {
        "name": "Ana Carolina Sousa",
        "email": "acarolina@terra.com.br",
        "senha": "***123456"
    }

 */
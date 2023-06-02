const { Service: ServiceModel } = require("./../models/Service");

const serviceController = {
    create: async (req, res) => {
        try {
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            };

            const response = await ServiceModel.create(service);

            res.status(201).json({ response, msg: "Adicionado com sucesso!" });
        } catch (error) {
            console.log(error);
        }
    },
    getAll: async (__, res) => {
        try {
            const service = await ServiceModel.find()

            res.json(service);
        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res) => {
        try {
            const id = req.params.id
            const service = await ServiceModel.findById(id);

            if (!service) {
                res.status(404).json({ msg: "Registo não encontrado!" });
                return
            }

            res.json(service)
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id
            const service = await ServiceModel.findById(id)

            if (!service) {
                res.status(404).json({ msg: "Não foi possivel excluir!" });
                return
            }

            const deleteService = await ServiceModel.findByIdAndRemove(id);
            
            res.status(200).json({deleteService, msg: "Não foi possivel excluir!" });
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        const id = req.params.id;
        // 1. Passo. Recebe os dados
        const service = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image
        }

        const updatedService = await ServiceModel.findByIdAndUpdate(id, service);

        // 2. Passo. caso não encontrado
        if (!updatedService) {
            res.status(404).json({ msg: "Serviço não pode ser atualizado!" });
            return;
        }

        // 3. Passo. atualiza caso tenha achado os dados
        res.status(200).json({ service, msg: "Serviço atualizado com sucesso." });
    }
};
module.exports = serviceController;
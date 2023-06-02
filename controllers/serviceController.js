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
    }
};
module.exports = serviceController;
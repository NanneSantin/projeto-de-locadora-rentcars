const express = require('express');

const {
    getAllVehicles,
    getVehicle,
    createVehicle,
    updateVehicle,
    deleteVehicle
} = require('../controllers/vehiclesControllers');

const validateId = require('../middlewares/vehiclesMiddlewares');

const route = express();

route.get('/veiculos', getAllVehicles);
route.post('/veiculos', createVehicle);

route.use(validateId);

route.get('veiculos/:id', getVehicle);
route.put('veiculos/:id', updateVehicle);
route.delete('veiculos/:id', deleteVehicle);

module.exports = route;

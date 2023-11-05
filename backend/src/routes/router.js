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

route.get('/veiculos/:id', validateId, getVehicle);
route.put('/veiculos/:id', validateId, updateVehicle);
route.delete('/veiculos/:id', validateId, deleteVehicle);

module.exports = route;

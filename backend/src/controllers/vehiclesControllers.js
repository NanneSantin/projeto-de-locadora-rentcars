const Vehicle = require('../models/vehicle');

const createVehicle = async (request, response) => {
    try {
        const {
            locadora,
            modelo,
            marca,
            ano,
            motor,
            cambio,
            portas,
            ar_condicionado
        } = request.body;

        await Vehicle.create({
            locadora,
            modelo,
            marca,
            ano: Number(ano),
            motor,
            portas: Number(portas),
            cambio,
            ar_condicionado
        });

        return response.status(201).send();
    } catch (error) {
        response.status(500).json({ message: 'Server internal error.' });
    }
}

const updateVehicle = async (request, response) => {
    try {
        const { id } = request.params;
        const {
            locadora,
            modelo,
            marca,
            ano,
            motor,
            cambio,
            portas,
            ar_condicionado
        } = request.body;

        await Vehicle.update({
            locadora,
            modelo,
            marca,
            ano: Number(ano),
            motor,
            portas: Number(portas),
            cambio,
            ar_condicionado
        }, {
            where: {
                id
            }
        });

        await Vehicle.findAll({
            where: {
                id
            }
        });

        return response.status(204).send();
    } catch (error) {
        response.status(500).json({ message: 'Server internal error.' });
    }
}

const deleteVehicle = async (request, response) => {
    try {
        const { id } = request.params;

        await Vehicle.destroy({
            where: {
                id
            }
        });

        response.status(204).send();
    } catch (error) {
        response.status(500).json({ message: 'Server internal error.' });
    }
}

const getAllVehicles = async (request, response) => {
    try {
        const vehicles = await Vehicle.findAll();

        response.status(200).json(vehicles);
    } catch (error) {
        response.status(500).json({ message: 'Server internal error.' });
    }
}

const getVehicle = async (request, response) => {
    try {
        const { id } = request.params;

        const vehicleFound = await Vehicle.findAll({
            where: {
                id
            }
        });

        response.status(200).json(vehicleFound[0]);
    } catch (error) {
        response.status(500).json({ message: 'Server internal error.' });
    }
}

module.exports = {
    createVehicle,
    updateVehicle,
    deleteVehicle,
    getAllVehicles,
    getVehicle
}
const Vehicle = require('../models/vehicle');

const validateID = async (request, response, next) => {
    try {
        const { id } = request.params;

        const vehicleFound = await Vehicle.findAll({
            where: {
                id
            }
        });

        if (vehicleFound.length < 1) {
            return response.status(404).json({ message: 'Vehicle not found.' });
        }

        next();
    } catch (error) {
        response.status(500).json({ message: 'Server internal error.' });
    }
}

module.exports = validateID;
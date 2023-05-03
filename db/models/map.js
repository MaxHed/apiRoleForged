const Sequelize = require('sequelize');

const MapSchema = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    path: {
        type: Sequelize.STRING,
        allowNull: false
    }
};

module.exports = { MapSchema };
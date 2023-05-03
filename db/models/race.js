const Sequelize = require('sequelize');

const RaceSchema = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
};

module.exports = { RaceSchema };
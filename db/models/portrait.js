const Sequelize = require('sequelize');

const PortraitSchema = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    path: {
        type: Sequelize.STRING,
        allowNull: false
    }
};

module.exports = { PortraitSchema };
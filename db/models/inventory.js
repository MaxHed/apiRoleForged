const Sequelize = require('sequelize');

const InventorySchema = {
    size: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
};

module.exports = { InventorySchema };
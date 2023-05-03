const Sequelize = require('sequelize');

const PurseSchema = {
    platinum_coin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 0
    },
    gold_coin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 0
    },
    silver_coin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 0
    },
    copper_coin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 0
    }
};

module.exports = { PurseSchema };
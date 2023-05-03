const Sequelize = require('sequelize');

const ItemSchema = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    slot: {
        type: Sequelize.SMALLINT,
        allowNull: true,
        isIn: [[1,2]]
    },
    value: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    max_size_stack: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    for_quest: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
};

module.exports = { ItemSchema };
const Sequelize = require('sequelize');

const CharacterSchema = {
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    playable: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
};

module.exports = { CharacterSchema };
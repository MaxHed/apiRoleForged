const Sequelize = require('sequelize');

const StatsSchema = {
    strength: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    intelligence: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    charisma: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dexterity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    courage: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    destiny: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    life: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    mana: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    attack: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    parry: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    armor: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    magic_dmg: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    magic_res: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
};

module.exports = { StatsSchema };
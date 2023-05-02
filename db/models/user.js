const Sequelize = require('sequelize');

//Schema Sequelize pour le User
const UserSchema = {
    mail: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
};

module.exports = { UserSchema };
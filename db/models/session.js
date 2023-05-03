const Sequelize = require('sequelize');

const SessionSchema = {
    session_date: {
        type: Sequelize.DATE,
        allowNull: false
    }
};

module.exports = { SessionSchema };
const Sequelize = require('sequelize');

const JobSchema = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
};

module.exports = { JobSchema };
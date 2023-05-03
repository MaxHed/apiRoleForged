const Sequelize = require('sequelize');

const CampaignSchema = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    starting_date: {
        type: Sequelize.DATE,
        allowNull: false
    }
};

module.exports = { CampaignSchema };
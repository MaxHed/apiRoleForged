// const { Sequelize } = require('sequelize');
const {Sequelize} = require('sequelize');
const { UserSchema } = require('./models/user');

const {
    env: {
        // get the variables from the .env file
        MYSQL_HOST,
        MYSQL_USER,
        MYSQL_PASSWORD,
        MYSQL_DATABASE,
    }
} = process;

async function setup() {
    //  Connexion à la base de données en utilisant les variables d'environnement
    const sequelize = new Sequelize(
        MYSQL_DATABASE,
        MYSQL_USER,
        MYSQL_PASSWORD,
        {
            host: MYSQL_HOST,
            dialect: 'mysql',
            database: MYSQL_DATABASE,
            logging: false,
        }
    );


    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    //  Importation des schémas
    const User = sequelize.define('User', UserSchema);

    //  On synchronise les modèles
    await Promise.all([
        User.sync(),
    ]);

    return {
        User,
    };
}

module.exports = { setup };
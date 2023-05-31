// const { Sequelize } = require('sequelize');
const {Sequelize} = require('sequelize');
const { UserSchema } = require('./models/user');
const { RaceSchema } = require('./models/race');
const { JobSchema } = require('./models/job');
const { CharacterSchema } = require('./models/character');
const { PortraitSchema } = require('./models/portrait');
const { StatSchema } = require('./models/stats');
const { PurseSchema } = require('./models/purse');
const { InventorySchema } = require('./models/inventory');
const { ItemSchema } = require('./models/item');
const { CampaignSchema } = require('./models/campaign');
const { SessionSchema } = require('./models/session');
const { MapSchema } = require('./models/map');

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
    const Race = sequelize.define('Race', RaceSchema);
    const Job = sequelize.define('Job', JobSchema);
    const Character = sequelize.define('Character', CharacterSchema);
    const Portrait = sequelize.define('Portrait', PortraitSchema);
    const Stats = sequelize.define('Stats', StatSchema);
    const Purse = sequelize.define('Purse', PurseSchema);
    const Inventory = sequelize.define('Inventory', InventorySchema);
    const Item = sequelize.define('Item', ItemSchema);
    const Campaign = sequelize.define('Campaign', CampaignSchema);
    const Session = sequelize.define('Session', SessionSchema);
    const Map = sequelize.define('Map', MapSchema);
    const Group = sequelize.define('Group', {});
    const Items_In_Inventory = sequelize.define('Items_In_Inventory', {});

    User.hasMany(Character, { foreignKey: { allowNull: false } });
    Character.belongsTo(User);

    User.hasMany(Campaign, { foreignKey: { allowNull: false } });
    Campaign.belongsTo(User);

    User.hasMany(Map, { foreignKey: { allowNull: false } });
    Map.belongsTo(User);

    Character.hasOne(Portrait, { foreignKey: { allowNull: false } });
    Portrait.belongsTo(Character);

    Character.hasOne(Stats, { foreignKey: { allowNull: false } });
    Stats.belongsTo(Character);

    Race.hasMany(Character, { foreignKey: { allowNull: false } });
    Character.belongsTo(Race);

    Job.hasMany(Character, { foreignKey: { allowNull: false } });
    Character.belongsTo(Job);

    Character.hasOne(Purse, { foreignKey: { allowNull: false } });
    Purse.belongsTo(Character);

    Character.hasOne(Inventory, { foreignKey: { allowNull: false } });
    Inventory.belongsTo(Character);

    Inventory.belongsToMany(Item, { through: Items_In_Inventory });
    Item.belongsToMany(Inventory, { through: Items_In_Inventory });

    Campaign.hasMany(Session, { foreignKey: { allowNull: false } });
    Session.belongsTo(Campaign);

    Session.belongsToMany(Character, { through: Group });
    Character.belongsToMany(Session, { through: Group });

    //  On synchronise les modèles
    await Promise.all([
        User.sync(),
        Race.sync(),
        Job.sync(),
        Character.sync(),
        Portrait.sync(),
        Stats.sync(),
        Purse.sync(),
        Inventory.sync(),
        Item.sync(),
        Campaign.sync(),
        Session.sync(),
        Map.sync(),
        Group.sync(),
        Items_In_Inventory.sync(),
    ]);

    return {
        User,
        Character,
        Portrait,
        Stats,
        Race,
        Job,
        Purse,
        Inventory,
        Item,
        Campaign,
        Session,
        Map,
        Group,
        Items_In_Inventory,
    };
}

module.exports = { setup };
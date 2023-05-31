require('dotenv').config();
const auth = require('./middleware/api/auth');
const cors = require('cors');

const { env: { FRONT_CLIENT } } = process;

const corsOptions = {
    credentials: true,
    optionsSuccessStatus: 200,
    origin: FRONT_CLIENT,
}

function init(app, models) {
    app.use('/dice',cors(corsOptions),require('./routes/dice')(models));

    app.use('/auth',cors(corsOptions), require('./routes/auth')(models));
    app.use('/users',cors(corsOptions), auth ,require('./routes/user')(models));
    app.use('/characters',cors(corsOptions), auth ,require('./routes/character')(models));
    app.use('/inventory',cors(corsOptions), auth ,require('./routes/inventory')(models));
    app.use('/item',cors(corsOptions), auth ,require('./routes/item')(models));
    app.use('/purse',cors(corsOptions), auth ,require('./routes/purse')(models));
    app.use('/campaign',cors(corsOptions), auth ,require('./routes/campaign')(models));
}

module.exports = { init };
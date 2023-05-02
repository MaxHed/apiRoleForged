const auth = require('./middleware/api/auth');

function init(app, models) {
    app.use('/auth', require('./routes/auth')(models));
    app.use('/users', /*auth ,*/require('./routes/user')(models));
}

module.exports = { init };
const publicRoutes = require('./routes/publicRoutes');

const config = {
    migrate: false,
    publicRoutes,
    port: process.env.PORT || '2137',
};

module.exports = config;
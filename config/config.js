const path = require('path');

module.exports = {
    development: {
        username: 'database',
        password: 'database',
        database: 'database',
        host: '127.0.0.1',
        port: 3306,
        dialect: 'sqlite',
        storage: path.join(process.cwd(), 'db', 'database.sqlite'),
        dialectOptions: {
            bigNumberStrings: true,
        },
    },
};

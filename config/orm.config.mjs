import log from 'fancy-log';
import Sequelize from 'sequelize';

export const orm = new Sequelize('code-gig', 'postgres', 'postgres', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

orm.authenticate()
    .then(() => log('Database connected...'))
    .catch(err => log('Error:', err));
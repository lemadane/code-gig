import Sequelize from 'sequelize';
import { orm } from '../config';

const {
    STRING,
    TEXT,
    UUID,
    literal,
} = Sequelize;

export const GigSchema = orm.define('gigs', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: literal('uuid_generate_v4()'),
    },
    title: {
        type: STRING,
        allowNull: false,
    },
    technologies: {
        type: STRING,
        allowNull: false,
    },
    budget: {
        type: STRING,
        allowNull: false,
    },
    description: {
        type: TEXT,
    },
    email: {
        type: STRING,
        allowNull: false,
    },
});
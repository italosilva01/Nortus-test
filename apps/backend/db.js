// db.js
import knex from 'knex';
import config from './knexfile.js';

// Pick the configuration environment (defaulting to development)
const environment = 'development';

// Initialize the database instance
const db = knex(config[environment]);

export default db;

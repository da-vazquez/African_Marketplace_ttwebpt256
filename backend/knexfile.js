require('dotenv').config()

const pg = require('pg')

const db = 'postgres://sdxxproyywthnn:39944463d8f2eed1e053f19c2026cb66d643782a4667320264811fa5ea5d316d@ec2-54-235-108-217.compute-1.amazonaws.com:5432/d4g09v5f3sfgbl'

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false }
}

const sharedConfig = {
  client: 'pg',
  migrations: { directory: './database/api/data/migrations' },
  seeds: { directory: './database/api/data/seeds' },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: {
		connectionString: db,
		ssl: {rejectUnauthorized: false}
	  },
  },
  testing: {
    ...sharedConfig,
    connection: process.env.TESTING_DATABASE_URL,
  },
  production: {
    ...sharedConfig,
    // connection: process.env.DATABASE_URL,
    pool: { min: 2, max: 10 },
    // connectionString: pgConnection
    connection: {
      connectionString: process.env.DATABASE_URL || db,
      ssl: {rejectUnauthorized: false}
    }
  },
}

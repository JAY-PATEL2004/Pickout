const { Client } = require('pg');

const connectionString = 'postgresql://pickout_owner:L5hS0JvwkoEM@ep-spring-resonance-a5o9b60f.us-east-2.aws.neon.tech/pickout?sslmode=require';

const client = new Client({
  connectionString: connectionString,
});

client.connect()
  .then(() => console.log('Connected successfully'))
  .catch((e) => console.error('Connection error', e));

// Do NOT call client.end() here, to keep the connection open for reuse.
module.exports = client;

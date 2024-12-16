const { Client } = require('pg');

// const connectionString = 'postgresql://pickout_owner:L5hS0JvwkoEM@ep-spring-resonance-a5o9b60f.us-east-2.aws.neon.tech/pickout?sslmode=require';
const connectionString = 'postgresql://postgres:123@localhost:5432/Pickout';

const client = new Client({
  connectionString: connectionString,
});

client.connect()
  .then(() => console.log('Connected successfully'))
  .then(() => client.query('SELECT version();'))
  .then(res => console.log(res.rows[0]))
  .catch(e => console.error(e))
  // .finally(() => client.end());

module.exports = client;
// export default client;
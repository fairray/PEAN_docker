const express = require('express');
const server = express();
const PORT = 5001;
const { Pool, Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'postgres',
    database: 'dev_data',
    password: 'password',
    port: 5432,
});
client
    .connect()
    .then(() => { console.log('connecting successfull'); })
    .catch((err) => { console.log(err) });
server.listen(PORT, () => console.log(`Server running on ${PORT}`));
server.get('/', (req, res) => res.status(200).send('hello'));
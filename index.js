require('dotenv').config();
const server = require('./api/server.js');

//make port dynamic
// yarn add dotenv
//require dotenv config
//create .env file
const port = process.env.PORT || 4000;
const greeting = process.env.GREETING;

server.listen(port, () => {
  console.log(`\n*** ${greeting} on http://localhost:${port} ***\n`);
});

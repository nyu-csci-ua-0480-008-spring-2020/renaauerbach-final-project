const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

let dbconf;
// Check if the environment variable (NODE_ENV) is set to PRODUCTION
if (process.env.NODE_ENV === 'PRODUCTION') {
   // If so --> read configration from a file (using blocking file I/O)
   const fn = path.join(__dirname, '../../config.json');
   const data = fs.readFileSync(fn);
   // Parse the JSON configuration file and set the connection string appropriately
   const conf = JSON.parse(data);
   dbconf = conf.dbconf;
} else {
   // If not in PRODUCTION mode
   dbconf = 'mongodb://localhost/team_caleb';
}

mongoose
   .connect(dbconf, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log(`Database connected successfully`))
   .catch(err => console.log(err));

// Check if the environment variable (NODE_ENV) is set to PRODUCTION
if (process.env.NODE_ENV === 'PRODUCTION') {
   MONGO_URI = 'mongodb://teamCalebUser:teamCalebPass@localhost/team_caleb';
} else {
   // If not in PRODUCTION mode
   MONGO_URI = 'mongodb://127.0.0.1:27017/team_caleb';
}

module.exports = {
   MONGO_URI: MONGO_URI,
   secretOrKey: 'secret',
};

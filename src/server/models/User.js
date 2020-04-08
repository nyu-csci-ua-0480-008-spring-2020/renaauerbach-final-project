const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
   username: { type: String, required: true },
   hash: { type: String, required: true },
   email: { type: String, required: true },
   firstName: { type: String, required: true },
   lastName: { type: String, required: true },
   location: { type: String },
   events: { type: Array },
   memories: { type: Array },
});

userSchema.pre('save', (next) => {
   // Check if user is new or a new password has been set
   if (this.isNew || this.isModified('password')) {
      // Saving reference to this because of changing scopes
      const doc = this;
      bcrypt.hash(doc.password, saltRounds, (err, hashPass) => {
         if (err) {
            next(err);
         } else {
            doc.password = hashPass;
            next();
         }
      });
   } else {
      next();
   }
});

module.exports = mongoose.model('User', userSchema);

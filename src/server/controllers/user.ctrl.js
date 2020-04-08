const User = require('../models/User');

createUser = (req, res) => {
   const body = req.body;

   if (!body) {
      return res.status(400).json({
         success: false,
         error: 'You must provide a movie',
      });
   }

   const user = new User(body);

   if (!user) {
      return res.status(400).json({ success: false, error: err });
   }

   user
      .save()
      .then(() => {
         return res.status(201).json({
            success: true,
            id: user._id,
            message: 'User created successfully',
         });
      })
      .catch((err) => {
         return res.status(400).json({
            err,
            message: 'User not created',
         });
      });
};

updateUser = async (req, res) => {
   const body = req.body;

   if (!body) {
      return res.status(400).json({
         success: false,
         error: 'You must provide a body to update',
      });
   }

   User.findOne({ _id: req.params.id }, (err, user) => {
      if (err) {
         return res.status(404).json({
            err,
            message: 'User not found',
         });
      }
      user.email = body.email;
      user.firstName = body.firstName;
      user.lastName = body.lastName;
      user.location = body.location;
      user
         .save()
         .then(() => {
            return res.status(200).json({
               success: true,
               id: user._id,
               message: 'User updated successfully',
            });
         })
         .catch((err) => {
            return res.status(404).json({
               err,
               message: 'User not updated',
            });
         });
   });
};

registerUser = async (req, res) => {
   await User.findOne({ _id: req.params.id }, (err, user) => {
      if (err) {
         return res.status(400).json({ success: false, error: err });
      }

      if (!user) {
         return res
            .status(404)
            .json({ success: false, message: `User not found` });
      }
      user.events.push(body.event);
      user
         .save()
         .then(() => {
            return res.status(200).json({
               success: true,
               id: user._id,
               message: 'User registered successfully',
            });
         })
         .catch((err) => {
            return res.status(404).json({
               err,
               message: 'User not registered',
            });
         });
   });
};

unregisterUser = async (req, res) => {
   await User.findOne({ _id: req.params.id }, (err, user) => {
      if (err) {
         return res.status(400).json({ success: false, error: err });
      }

      if (!user) {
         return res
            .status(404)
            .json({ success: false, message: `User not found` });
      }
      user.events.filter((event) => {
         return event !== body.event;
      });
      user
         .save()
         .then(() => {
            return res.status(200).json({
               success: true,
               id: user._id,
               message: 'User unregistered successfully',
            });
         })
         .catch((err) => {
            return res.status(404).json({
               err,
               message: 'User not unregistered',
            });
         });
   });
};

addMemoryToUser = async (req, res) => {
   await User.findOne({ _id: req.params.id }, (err, user) => {
      if (err) {
         return res.status(400).json({ success: false, error: err });
      }

      if (!user) {
         return res
            .status(404)
            .json({ success: false, message: `User not found` });
      }
      user.memories.push(body.memory);
      user
         .save()
         .then(() => {
            return res.status(200).json({
               success: true,
               id: user._id,
               message: 'Memory added to user successfully',
            });
         })
         .catch((err) => {
            return res.status(404).json({
               err,
               message: 'Memory not added to user',
            });
         });
   });
};

deleteUser = async (req, res) => {
   await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
      if (err) {
         return res.status(400).json({ success: false, error: err });
      }

      if (!user) {
         return res
            .status(404)
            .json({ success: false, error: `User not found` });
      }

      return res.status(200).json({ success: true, data: movie });
   }).catch((err) => console.log(err));
};

getUserById = async (req, res) => {
   await User.findOne({ _id: req.params.id }, (err, user) => {
      if (err) {
         return res.status(400).json({ success: false, error: err });
      }

      if (!user) {
         return res
            .status(404)
            .json({ success: false, error: `User not found` });
      }
      return res.status(200).json({ success: true, data: user });
   }).catch((err) => console.log(err));
};

module.exports = {
   createUser,
   updateUser,
   deleteUser,
   getUserById,
};

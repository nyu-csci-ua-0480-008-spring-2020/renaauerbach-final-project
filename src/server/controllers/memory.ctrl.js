const Memory = require('../models/Memory');

createMemory = (req, res) => {
   const body = req.body;

   if (!body) {
      return res.status(400).json({
         success: false,
         error: 'You must provide a movie',
      });
   }

   const memory = new Memory(body);

   if (!memory) {
      return res.status(400).json({ success: false, error: err });
   }

   memory
      .save()
      .then(() => {
         return res.status(201).json({
            success: true,
            id: memory._id,
            message: 'Memory created successfully',
         });
      })
      .catch((err) => {
         return res.status(400).json({
            err,
            message: 'Memory not created',
         });
      });
};

updateMemory = async (req, res) => {
   const body = req.body;

   if (!body) {
      return res.status(400).json({
         success: false,
         error: 'You must provide a body to update',
      });
   }

   Memory.findOne({ _id: req.params.id }, (err, memory) => {
      if (err) {
         return res.status(404).json({
            err,
            message: 'Memory not found',
         });
      }
      memory.title = body.title;
      memory.text = body.text;
      memory.image = body.image;
      memory.location = body.location;
      memory
         .save()
         .then(() => {
            return res.status(200).json({
               success: true,
               id: memory._id,
               message: 'Memory updated successfully',
            });
         })
         .catch((err) => {
            return res.status(404).json({
               err,
               message: 'Memory not updated',
            });
         });
   });
};

deleteMemory = async (req, res) => {
   await Memory.findOneAndDelete({ _id: req.params.id }, (err, memory) => {
      if (err) {
         return res.status(400).json({ success: false, error: err });
      }

      if (!memory) {
         return res
            .status(404)
            .json({ success: false, error: `Memory not found` });
      }

      return res.status(200).json({ success: true, data: memory });
   }).catch((err) => console.log(err));
};

getMemoryById = async (req, res) => {
   await Memory.findOne({ _id: req.params.id }, (err, memory) => {
      if (err) {
         return res.status(400).json({ success: false, error: err });
      }

      if (!memory) {
         return res
            .status(404)
            .json({ success: false, error: `Memory not found` });
      }
      return res.status(200).json({ success: true, data: memory });
   }).catch((err) => console.log(err));
};

getMemories = async (req, res) => {
   await Memory.find({}, (err, memories) => {
      if (err) {
         return res.status(400).json({ success: false, error: err });
      }
      if (!memories.length) {
         return res
            .status(404)
            .json({ success: false, error: `Memories not found` });
      }
      return res.status(200).json({ success: true, data: memories });
   }).catch((err) => console.log(err));
};

module.exports = {
   createMemory,
   updateMemory,
   deleteMemory,
   getMemories,
   getMemoryById,
};

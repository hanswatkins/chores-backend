// Require the mongoose package from the connection pool
const mongoose = require('../db/connection');

// Create a new schema with 2 properties and assign it to a variable (ChoreSchema)
const ChoreSchema = new mongoose.Schema({
  title: String,
  description: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

// Instantiate the model, calling it 'Chore' and with the Schema we just made
const Chore = mongoose.model('Chore', ChoreSchema);

// Export the model
module.exports = Chore;

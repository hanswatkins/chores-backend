// Require the mongoose package from the connection pool
const mongoose = require('../db/connection');

// Create a new schema with 2 properties and assign it to a variable (ChoreSchema)
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Instantiate the model, calling it 'Chore' and with the Schema we just made
const User = mongoose.model('User', UserSchema);

// Export the model
module.exports = User;

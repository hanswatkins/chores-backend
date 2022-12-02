require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success
db.on('error', (err) =>
	console.log(err.message + 'Uh oh, is Mongodb not running?')
);
db.on('connected', () => console.log('mongo connected at:' + mongoURI));
db.on('disconnected', () => console.log('mongo disconnected. bye-bye!'));

// Open the connection
db.on('open', () => {
	console.log('✅ mongo connection made!');
});

module.exports = mongoose;

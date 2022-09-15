const mongoose = require('./connection');

const Chore = require('../models/Chore');
const User = require('../models/User');
const choreseeds = require('./seeds.json');

Chore.deleteMany({})
  .then(() => User.deleteMany({}))
  .then(() => {
    return User.create({ email: 'fake@email.com', name: 'Fake Person' })
      .then((user) =>
        choreseeds.map((chore) => ({ ...chore, owner: user._id }))
      )
      .then((chores) => Chore.insertMany(chores));
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });

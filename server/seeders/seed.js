const db = require('../config/connection');
const { User, Artist, Feature } = require('../models');
const userSeeds = require('./userSeeds.json');
const featureSeeds = require('./featureSeeds.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Feature.deleteMany({});
  await User.create(userSeeds);
  await Feature.create(featureSeeds);
  

  console.log('all done!');
  process.exit(0);
});

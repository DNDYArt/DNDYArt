const db = require('../config/connection');
const { User, Artist, Feature } = require('../models');
const userSeeds = require('./userSeeds.json');
const featureSeeds = require('./featureSeeds.json');
const artistSeeds = require('./artistSeeds.json')

db.once('open', async () => {
 try{ 
  await User.deleteMany({});
  await Feature.deleteMany({});
  await Artist.deleteMany({});
  await User.create(userSeeds);
  await Feature.create(featureSeeds);

  for (let i = 0; i < artistSeeds.length; i++){
    const {_id, first_name} = await Artist.create(artistSeeds [i]);
    const feature = await Feature.findOneAndUpdate(
      {name: first_name},
      {
        $addToSet:{
          artists:_id,
        }
      }
    )
  }
 } catch (err) {
  console.error(err);
  process.exit(1);
}
  
  console.log('all done!');
  process.exit(0);
});

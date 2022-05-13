const db = require('../config/connection');
const { Collector, Artist, Feature } = require('../models');
const userSeeds = require('./userSeeds.json');
const featureSeeds = require('./featureSeeds.json');
const artistSeeds = require('./artistSeeds.json')

db.once('open', async () => {
 try{ 
  await Collector.deleteMany({});
  await Feature.deleteMany({});
  await Artist.deleteMany({});
<<<<<<< HEAD
  await Collector.create(userSeeds);
  await Feature.create(featureSeeds);
=======
>>>>>>> 14979bd (added all mutattion and queries for gql, also redid seeding and models)

  await User.create(userSeeds);
  await Artist.create(artistSeeds);

  for (let i = 0; i < featureSeeds.length; i++){
    const {_id, author} = await Feature.create(featureSeeds [i]);
    const artist = await Artist.findOneAndUpdate(
      {first_name: author},
      {
        $addToSet:{
          features:_id,
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

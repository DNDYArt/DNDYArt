const db = require('../config/connection');
const { Collector, Artist, Feature } = require('../models');
const collectorSeeds = require('./collectorSeeds.json');
const featureSeeds = require('./featureSeeds.json');
const artistSeeds = require('./artistSeeds.json')

db.once('open', async () => {
 try{ 
  await Collector.deleteMany({});
  await Feature.deleteMany({});
  await Artist.deleteMany({});
  await Collector.create(collectorSeeds);
  await Artist.create(artistSeeds);

  for (let i = 0; i < featureSeeds.length; i++){
    const {_id, authorFirstName} = await Feature.create(featureSeeds [i]);
    const artist = await Artist.findOneAndUpdate(
      {first_name: authorFirstName},
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

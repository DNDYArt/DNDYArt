<<<<<<< HEAD
const db = require("../config/connection");
const { Collector, Artist, Feature } = require("../models");
const userSeeds = require("./userSeeds.json");
const featureSeeds = require("./featureSeeds.json");
const artistSeeds = require("./artistSeeds.json");

db.once("open", async () => {
	try {
		await Collector.deleteMany({});
		await Feature.deleteMany({});
		await Artist.deleteMany({});
		await Collector.create(userSeeds);
		await Artist.create(artistSeeds);

		for (let i = 0; i < featureSeeds.length; i++) {
			const { _id, author } = await Feature.create(featureSeeds[i]);
			const artist = await Artist.findOneAndUpdate(
				{ first_name: author },
				{
					$addToSet: {
						features: _id,
					},
				}
			);
		}
	} catch (err) {
		console.error(err);
		process.exit(1);
	}

	console.log("all done!");
	process.exit(0);
});
=======
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
>>>>>>> 3f0f7506d3173d97c5a55f2510b1263ee7b8b6ab

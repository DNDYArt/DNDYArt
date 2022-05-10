const { Schema, model } = require('mongoose');

const featureSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  startPrice: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,   //Currently under the assumption that this is a refrence to the CDN location
  }
});

const Feature = model('feature', featureSchema);

module.exports = Feature;

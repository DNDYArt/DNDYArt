const { Schema, model } = require('mongoose'),
      featureSchema = require('./Feature')

const artistSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true
  },
  last_name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
  },
  password: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  location: {
    type: String,
    required: true
  },
  features: [featureSchema]
});

artistSchema.pre('save', async function(next){
  try {
    if (!this.isModified('password')) return next();

    this.password = await bycrypt.hash(this.password, 10)
    next(); 
  } catch (err) {
    next(err)
  }
})

const Artist = model('artist', artistSchema);

module.exports = Artist;

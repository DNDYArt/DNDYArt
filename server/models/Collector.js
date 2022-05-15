const { Schema, model } = require('mongoose'),
      bycrypt = require('bcrypt');

const collectorSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    unique:true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    unique:true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique:true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique:true,
    match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  }
});

collectorSchema.pre('save', async function(next){
  try {
    if (!this.isModified('password')) return next();

    this.password = await bycrypt.hash(this.password, 10)
    next(); 
  } catch (err) {
    next(err)
  }
})

collectorSchema.methods.isCorrectPassword = async function (password) {
  return bycrypt.compare(password, this.password);
};

const Collector = model('collector', collectorSchema);

module.exports = Collector;

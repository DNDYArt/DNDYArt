const { Schema, model } = require('mongoose'),
      bycrypt = require('bcrypt');

const userSchema = new Schema({
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

userSchema.pre('save', async function(next){
  try {
    if (!this.isModified('password')) return next();

    this.password = await bycrypt.hash(this.password, 10)
    next(); 
  } catch (err) {
    next(err)
  }
})

const User = model('user', userSchema);

module.exports = User;

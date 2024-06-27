const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  password: { type: String, required: true },
  isDeleted: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', UserSchema);
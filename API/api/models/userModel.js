var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: "Active"
  },
  role: {
      type: String,
      required: true
  }
});

module.exports = mongoose.model('User', UserSchema);
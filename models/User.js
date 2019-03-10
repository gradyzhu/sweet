const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema and models blended into one.

const UserSchema = new Schema({
  handle: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// export models in order to use in other files.  
// utitlize the mongoose.model method to name the model, and associate the schema const created.

module.exports = User = mongoose.model('users', UserSchema);
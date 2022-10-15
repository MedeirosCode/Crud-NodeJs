const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  }
});

// criando model

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;

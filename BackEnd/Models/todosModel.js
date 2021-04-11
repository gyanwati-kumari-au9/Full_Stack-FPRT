const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todosSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'users'},
  task: {type: String, required: true},
  completed: {type: Boolean, default: false},
  favorite: {type: Boolean, default: false},
  createdAt: {type: Date, default: Date.now()},
  cGroup: String
});

module.exports = mongoose.model("todos", todosSchema);
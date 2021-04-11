const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todosSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'users'},
  task: String,
  completed: Boolean,
  favorite: Boolean,
  group: String
});

module.exports = mongoose.model("todos", todosSchema);
const router = require("express").Router();
const Todos = require("../Models/todosModel");
const Groups = require("../Models/groupModel");


// Verify Token
const verify = require("../verifyToken");

// Get All Todo
router.get("/", verify, async (req, res) => {
  const todos = await Todos.find({user: req.user.user._id});
  res.send({ todos });
});

// Get Todo by ID
router.post("/", verify, async (req, res) => {
  const group = await Groups.findOne({_id: req.body.group});
  if(!group) return res.send({error: "Invalid group Id"});
  console.log("===>", req.user);
  const todo = await new Todos({user: req.user.user._id, task: req.body.task, group: req.body.group}).save();
  res.send({todo, message: "Successfully created"});
});

// Update Todo
router.put("/:id", verify, async (req, res) => {
  if (req.body.group) {
    const group = await Groups.findOne({ _id: req.body.group, user: req.user.user._id});
    if(!group) return re.send({error: "Invalid Group Id"});
  }
  const foundTodos = await Todos.findOne({_id: req.params.id});
  if(!foundTodos) return res.send({error: "Invalid Todos ID"});
  const user = await Todos.updateOne(
    { _id: req.params.id },
    {
      $set: {
        task: req.body.task ? req.body.task : foundTodo.task,
        group: req.body.group ? req.body.group : foundTodo.group
      },
    }
  );
  res.send({ message: "Successfully Updated" });
});

// Update Todo
router.put("/favorite/:id", verify, async (req, res) => {
  
  const foundTodos = await Todos.findOne({_id: req.params.id});
  if(!foundTodos) return res.send({error: "Invalid Todos ID"});
  const user = await Todos.updateOne(
    { _id: req.params.id },
    {
      $set: {
        favorite: !foundTodos.favorite
      },
    }
  );
  res.send({ message: "Successfully Updated" });
});


// Update Todo
router.put("/completed/:id", verify, async (req, res) => {
  const foundTodos = await Todos.findOne({_id: req.params.id});
  if(!foundTodos) return res.send({error: "Invalid Todos ID"});
  const user = await Todos.updateOne(
    { _id: req.params.id },
    {
      $set: {
        completed: !foundTodos.completed 
      },
    }
  );
  res.send({ message: "Successfully Updated" });
});

// Delete Todo
router.delete("/:id", verify, async (req, res) => {
  const todo = await Todos.deleteOne({ _id: req.params.id, user: req.user.user._id });
  if (!todo) return res.send("invalid Id");
  res.send({ message: "Successfully deleted" });
});

module.exports = router;
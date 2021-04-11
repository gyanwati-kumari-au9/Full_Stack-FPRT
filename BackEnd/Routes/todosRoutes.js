const router = require("express").Router();
const Todos = require("../Models/todosModel");

// Verify Token
const verify = require("../verifyToken");

// Get All Todo
router.get("/", verify, async (req, res) => {
  const alluser = await Todos.find();
  res.send({ alluser });
});

// Get Todo by ID
router.get("/:id", async (req, res) => {
  const user = await Todos.findById(req.params.id);
  if (!user) return res.send("Todo Not Found");
  res.send(user);
});

// Find all Todos by Id
router.get("/orders/:id", async (req, res) => {
  const orders = await USERORDERS.find({ cartId: req.params.id });
  res.send(orders);
});

// Update Todo
router.put("/:id", verify, async (req, res) => {
  const foundTodo = await Todos.findById(req.params.id);
  const user = await Todos.updateOne(
    { _id: req.params.id },
    {
      $set: {
        username: req.body.username ? req.body.username : foundTodo.username,
        email: req.body.email ? req.body.email : foundTodo.email,
        role: req.body.role ? req.body.role : foundTodo.role,
        status: req.body.status ? req.body.status : foundTodo.status,
        password: req.body.password ? req.body.password : foundTodo.password,
      },
    }
  );
  res.send({ user });
});

// Delete Todo
router.delete("/:id", verify, async (req, res) => {
  const user = await Todos.deleteOne({ _id: req.params.id });
  if (!user) return res.send("invalid Id");
  res.send({ user });
});

module.exports = router;
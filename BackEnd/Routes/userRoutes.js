const router = require("express").Router();
const Users = require("../Models/userModel");

// Verify Token
const verify = require("../verifyToken");

// Get All User
router.get("/", verify, async (req, res) => {
  const alluser = await Users.find();
  res.send({ alluser });
});

// Get User by ID
router.get("/:id", async (req, res) => {
  const user = await Users.findById(req.params.id);
  if (!user) return res.send("User Not Found");
  res.send(user);
});

// Login
router.post("/login", async (req, res) => {
    const {email, password} = req.body;
    const user = await Users.findOne({email: email });
    if (!user) return res.send({error: "User Not Found"});

    if (user.password != password) return res.send({error: "Invalid Username or password"});
    res.send({user, message: "Login successful"});
});

// Signup
router.post("/signup", async (req, res) => {
    console.log("Signup API called")
    const {email, name, password} = req.body;
    const user = await Users.findOne({email: email});
    if(user) return res.status(200).json({error:"User with same Id already exists"}); 
    const newUser = await new Users({email, name, password}).save()
    res.send({user: newUser, message: "User Succefully registered"});
});

// Update User
router.put("/:id", verify, async (req, res) => {
  const foundUser = await Users.findById(req.params.id);
  const user = await Users.updateOne(
    { _id: req.params.id },
    {
      $set: {
        username: req.body.username ? req.body.username : foundUser.username,
        email: req.body.email ? req.body.email : foundUser.email,
        role: req.body.role ? req.body.role : foundUser.role,
        status: req.body.status ? req.body.status : foundUser.status,
        password: req.body.password ? req.body.password : foundUser.password,
      },
    }
  );
  res.send({ user });
});

// Delete User
router.delete("/:id", verify, async (req, res) => {
  const user = await Users.deleteOne({ _id: req.params.id });
  if (!user) return res.send("invalid Id");
  res.send({ user });
});

module.exports = router;
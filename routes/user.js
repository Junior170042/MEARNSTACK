const User = require("../models/users");
const router = require("express").Router();
const bcrypt = require("bcrypt");

const userPost = require("../models/posts");

//update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    //encrypt the new password to be stored
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (error) {}
  } else {
    //not allowed
    res.status(401).json("User can not be modified");
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      if (user) {
        try {
          await userPost.deleteMany({ username: user.username });
          await User.findByIdAndDelete(req.params.id);
          res.status(200).json("User has been deleted successfully");
        } catch (error) {
          res.status(404).json(error);
        }
      }
    } catch (error) {
      res.status(404).json(error);
    }
  } else {
    res.status(401).json("User not found");
  }
});

//get user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {}
});

module.exports = router;

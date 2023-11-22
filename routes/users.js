const express = require('express')
const {
  getUser,
  update,
  deleteUser,
  follow,
  unFollow
} = require('../controllers/user.js')
const verifyToken  = require('../middlewares/verifyToken.js')

const router = express.Router();

// Update User
router.put("/:id", verifyToken, update);

// Get User
router.get("/find/:id", getUser);

// Delete User
router.delete("/:id", verifyToken, deleteUser);

// Follow
router.put("/follow/:id", verifyToken, follow);

// Unfollow
router.put("/unfollow/:id", verifyToken, unFollow);

module.exports = router;
const express = require("express");
const router = express.Router();

const postController = require("../controllers/PostController")

const userValidator = require("../validators/UserValidator");

// GET localhost:3000/post/
router.get("/", postController.index);
// GET localhost:3000/post/4
router.get("/:id", postController.show);

module.exports = router;
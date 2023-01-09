const express = require("express");
const router = express.Router();

const postagens = require("../controllers/PostController")

const userValidator = require("../validators/UserValidator");

// GET localhost:3000/user/
router.get("/", postagens.index);
// GET localhost:3000/user/4
router.get("/:id", postagens.show);

module.exports = router;
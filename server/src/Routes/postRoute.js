const express = require("express");
const router = express.Router();

const postController = require("../controllers/PostController")


// GET localhost:3000/post/
router.get("/", postController.index);
// GET localhost:3000/post/4
router.get("/:id", postController.show);
// POST localhost:3000/post/create
router.post("/newpost", postController.store );
// PUT localhost:3000/post/edit/1
router.put("/update/:id", postController.update);
// DELETE localhost:3000/post/delete/1
router.delete("/delete/:id", postController.delete);

module.exports = router;
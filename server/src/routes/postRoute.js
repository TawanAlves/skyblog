const express = require("express");
const router = express.Router();
const postController = require("../controllers/PostController");

const upload = require("../helpers/multer");
const userValidator = require("../validators/UserValidator");

// POST localhost:3000/post/create
router.post(
  "/newpost",
  upload.single("avatar"),
  userValidator.storeValidator,
  postController.store
);
// PUT localhost:3000/post/edit/661728b0-92f5-11ed-ae5e-ef9f7d26733a
router.put("/update/:id", upload.single("avatar"), postController.update);
// DELETE localhost:3000/post/delete/661728b0-92f5-11ed-ae5e-ef9f7d26733a
router.delete("/delete/:id", postController.delete);

// GET localhost:3000/post/
router.get("/", postController.index);
// GET localhost:3000/post/661728b0-92f5-11ed-ae5e-ef9f7d26733a
router.get("/:id", postController.show);

module.exports = router;

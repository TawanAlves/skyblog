const express = require("express");
const router = express.Router();
const postController = require("../controllers/PostController")

const upload = require("../helpers/multer");
const userValidator = require("../validators/UserValidator");



// POST localhost:3000/post/create
router.post("/newpost",upload.single("avatar"),
userValidator.storeValidator, postController.store );
// PUT localhost:3000/post/edit/1
router.put("/update/:id",upload.single("avatar"), postController.update);
// DELETE localhost:3000/post/delete/1
router.delete("/delete/:id", postController.delete);

// GET localhost:3000/post/
router.get("/", postController.index);
// GET localhost:3000/post/4
 router.get("/:id", postController.show);

//* mudanças em PUT e POST
module.exports = router;
const express = require("express");
const router = express.Router();
const UserController = require("./controllers/UserController");
const AuthController = require("./controllers/AuthController");
const authMiddleware = require("./middlewares/authMiddleware");

router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);
router.post("/worko/user", authMiddleware, UserController.createUser);
router.get("/worko/user", authMiddleware, UserController.getAllUsers);
router.get("/worko/user/:userId", authMiddleware, UserController.getUserById);
router.put("/worko/user/:userId", authMiddleware, UserController.updateUser);
router.patch("/worko/user/:userId", authMiddleware, UserController.updateUser);
router.delete("/worko/user/:userId", authMiddleware, UserController.deleteUser);

module.exports = router;

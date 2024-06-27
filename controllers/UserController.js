const UserService = require("../services/UserService");
const { UserDTO, CreateUserDTO } = require("../dtos/UserDTO");
const {
  userSchemaTest,
  userIdSchema,
  zipSchema,
} = require("../validators/userValidator");
const Joi = require("joi");
const User = require("../models/User");

class UserController {
  async createUser(req, res) {
    const { error } = userSchemaTest.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const createUserDTO = new CreateUserDTO(req.body);
    const user = await UserService.createUser(createUserDTO);
    res.status(201).json(new UserDTO(user));
  }

  async getUserById(req, res) {
    const { error } = userIdSchema.validate(req.params.userId);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const user = await UserService.getUserById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(new UserDTO(user));
  }

  async updateUser(req, res) {
    const { error: idError } = userIdSchema.validate(req.params.userId);
    if (idError) {
      return res.status(400).json({ message: idError.details[0].message });
    }
    if (req.body.zipCode) {
      const { error } = zipSchema.validate(req.body.zipCode);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
    }
    if (req.body?.email) {
      const data = await User.findOne({ _id: req.params.userId });
      if (data?.email !== req.body?.email) {
        return res.status(400).json({ message: "Email is non Editable" });
      }
    }

    const user = await UserService.updateUser(req.params.userId, req.body);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(new UserDTO(user));
  }

  async deleteUser(req, res) {
    const { error } = userIdSchema.validate(req.params.userId);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const user = await UserService.deleteUser(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(204).send();
  }

  async getAllUsers(req, res) {
    const users = await UserService.getAllUsers();
    res.json(users.map((user) => new UserDTO(user)));
  }
}

module.exports = new UserController();

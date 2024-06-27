const User = require('../models/User');

class UserDAO {
  async createUser(userData) {
    const user = new User(userData);
    return await user.save();
  }

  async getUserById(userId) {
    return await User.findById(userId);
  }

  async updateUser(userId, updateData) {
   
    return await User.findByIdAndUpdate(userId, updateData, { new: true });
  }

  async deleteUser(userId) {
    return await User.findByIdAndUpdate(userId, { isDeleted: true }, { new: true });
  }

  async getAllUsers() {
    return await User.find({ isDeleted: false });
  }
}

module.exports = new UserDAO();
const UserDAO = require('../daos/UserDAO');

class UserService {
  async createUser(userData) {
    return await UserDAO.createUser(userData);
  }

  async getUserById(userId) {
    return await UserDAO.getUserById(userId);
  }

  async updateUser(userId, updateData) {
    return await UserDAO.updateUser(userId, updateData);
  }

  async deleteUser(userId) {
    return await UserDAO.deleteUser(userId);
  }

  async getAllUsers() {
    return await UserDAO.getAllUsers();
  }
}

module.exports = new UserService();
class UserDTO {
    constructor(user) {
      this.id = user._id;
      this.name = user.name;
      this.email = user.email;
      this.age = user.age;
      this.city = user.city;
      this.zipCode = user.zipCode;
      this.isDeleted = user.isDeleted;
    }
  }
  
  class CreateUserDTO {
    constructor(data) {
      this.name = data.name;
      this.email = data.email;
      this.age = data.age;
      this.city = data.city;
      this.zipCode = data.zipCode;
    }
  }
  
  module.exports = {
    UserDTO,
    CreateUserDTO
  };
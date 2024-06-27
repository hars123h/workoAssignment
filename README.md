# MVC CRUD App

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   git clone https://github.com/hars123h/workoassignment.git
   cd workoassignment

2. Install dependencies:
   npm install

3. Create a .env file in the root directory and add the following:
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/mvc-crud
   JWT_SECRET=your_jwt_secret

API Endpoints

  POST /api/auth/register: Register a new user. 
  
  POST /api/auth/login: Login and get a token.
  
  POST /api/worko/user: Create a new user (requires authentication).
  
  GET /api/worko/user: Get all users (requires authentication).
  
  GET /api/worko/user/: Get user by ID (requires authentication).
  
  PUT /api/worko/user/: Update user by ID (requires authentication).
  
  PATCH /api/worko/user/ : Partially update user by ID (requires authentication).
  
  DELETE /api/worko/user/ : Soft delete user by ID (requires authentication).

 

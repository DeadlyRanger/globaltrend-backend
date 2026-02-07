# Task Management System (Backend)

This is the backend server for the Task Management System. It provides a RESTful API for user authentication and task management, built with Node.js and Express.

## Tech Stack

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database (connected via Mongoose).
- **Cors**: Middleware to enable Cross-Origin Resource Sharing.
- **Dotenv**: Module to load environment variables.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed.
- [MongoDB](https://www.mongodb.com/) installed locally or a cloud instance (e.g., MongoDB Atlas).

### Installation

1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   - Create a `.env` file in the root of the `Backend` folder.
   - Copy the contents from `.env.example` and update the values.

### Running the Server

To start the server:

```bash
npm start
# or
node Index.js
```

The server will typically run on `http://localhost:5000`.

## API Endpoints

### Authentication (`/api/auth`)

| Method | Endpoint    | Description           | Request Body (JSON) |
| :----- | :---------- | :-------------------- | :------------------ |
| POST   | `/register` | Register a new user   | `{ "username": "user", "email": "user@example.com", "password": "password123" }` |
| POST   | `/login`    | Login an existing user| `{ "email": "user@example.com", "password": "password123" }` |

### Tasks (`/api/tasks`)

*Note: These endpoints likely require an Authorization header (Bearer Token).*

| Method | Endpoint | Description | Request Body (JSON) |
| :----- | :------- | :---------- | :------------------ |
| GET    | `/`      | Get all tasks for the user | N/A |
| POST   | `/`      | Create a new task | `{ "title": "Fix bugs", "description": "Fix login issue", "status": "pending" }` |
| PUT    | `/:id`   | Update a task | `{ "status": "completed" }` |
| DELETE | `/:id`   | Delete a task | N/A |

## Models

Based on the application structure, the database models are likely:

### User Model
- **username**: String, required.
- **email**: String, required, unique.
- **password**: String, required (hashed).

### Task Model
- **title**: String, required.
- **description**: String.
- **status**: String (e.g., 'pending', 'completed').
- **user**: ObjectId (Reference to User), required.
- **createdAt**: Date.

## Test Cases

Below is a list of test scenarios to verify the backend functionality.

### Auth Tests
1. **Register User**:
   - Input: Valid username, email, password.
   - Expected: 201 Created, returns user data/token.
2. **Register Duplicate User**:
   - Input: Existing email.
   - Expected: 400 Bad Request, error message "User already exists".
3. **Login Success**:
   - Input: Valid email and password.
   - Expected: 200 OK, returns JWT token.
4. **Login Failure**:
   - Input: Invalid password.
   - Expected: 400/401 Unauthorized.

### Task Tests
1. **Create Task**:
   - Input: Valid title, description, auth token.
   - Expected: 201 Created, returns task object.
2. **Get Tasks**:
   - Input: Auth token.
   - Expected: 200 OK, returns array of tasks belonging to user.
3. **Update Task**:
   - Input: Task ID, new status, auth token.
   - Expected: 200 OK, returns updated task.
4. **Delete Task**:
   - Input: Task ID, auth token.
   - Expected: 200 OK, message "Task deleted".
5. **Unauthorized Access**:
   - Input: Accessing `/api/tasks` without token.
   - Expected: 401 Unauthorized.

## Environment Variables

See `.env.example` for reference.

```properties
PORT=5000
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173
JWT_SECRET=your_secret_key
```

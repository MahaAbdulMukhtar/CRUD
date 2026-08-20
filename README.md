# CRUD Application

A full-stack CRUD application built with React, Vite, Express, and MongoDB. It allows users to create, view, update, and delete records from a MongoDB database using a simple frontend interface.

## Tech Stack

- Frontend: React + Vite + Bootstrap
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- HTTP Client: Axios

## Features

- Add new users
- View all users
- Update existing user details
- Delete user records
- Routing between pages using React Router

## Project Structure

```bash
CRUD/
├── client/                  # React frontend
│   ├── src/                 # React components
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── server/                  # Express backend
│   ├── models/
│   ├── index.js
│   └── package.json
├── .gitignore
└── README.md
```

## Prerequisites

Before running the app, make sure you have:

- Node.js installed
- MongoDB running locally or a valid MongoDB connection string
- npm installed

## Setup

### 1. Clone the project

```bash
git clone <your-repository-url>
cd CRUD
```

### 2. Install server dependencies

```bash
cd server
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `server` folder:

```env
MONGODB_URI=mongodb://localhost:27017/crud-app
PORT=3001
```

> Replace the MongoDB URI with your own database connection string if you're using MongoDB Atlas or another remote database.

### 4. Install client dependencies

```bash
cd ../client
npm install
```

## Run the Application

### Start the backend

```bash
cd server
npm run dev
```

The backend runs at:

```bash
http://localhost:3001
```

### Start the frontend

Open a new terminal and run:

```bash
cd client
npm run dev
```

The frontend usually runs at:

```bash
http://localhost:5173
```

## API Endpoints

The backend exposes the following routes:

| Method | Endpoint          | Description             |
| ------ | ----------------- | ----------------------- |
| GET    | `/`               | Fetch all users         |
| GET    | `/getUser/:id`    | Get a single user by ID |
| POST   | `/createUser`     | Create a new user       |
| PUT    | `/updateUser/:id` | Update an existing user |
| DELETE | `/deleteUser/:id` | Delete a user           |

### Example request body for creating/updating a user

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}
```

## Frontend Routes

The React app includes these routes:

- `/` - Home page showing all users
- `/create` - Form to add a user
- `/update/:id` - Form to edit a user

## Notes

- The frontend uses `VITE_API_URL` if set; otherwise it defaults to `http://localhost:3001`.
- If MongoDB is not available, the server will fail to start because the app requires a valid `MONGODB_URI`.

## License

This project is for learning and demonstration purposes.

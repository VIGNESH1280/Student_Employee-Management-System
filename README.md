# 🎓 Student & Employee Management System

A full-stack **Student & Employee Management System** built with the **MERN Stack**, featuring user registration, authentication, role-based user types, JWT-based authorization, and MongoDB database integration.

The project focuses on building a clean **React frontend** connected to a structured **Node.js + Express REST API**.

---

## 🚀 Features

- 🔐 User Registration & Login
- 🔑 JWT-based authentication
- 🔒 Password hashing using bcrypt
- 👥 User roles: **Student, Employee & Admin**
- 🗄️ MongoDB Atlas database integration
- ⚛️ React Context API for authentication state
- 🧭 Client-side routing with React Router
- 🌐 RESTful API architecture
- 🛡️ Authentication middleware
- 📝 Backend request logging middleware
- 📱 Modular and reusable React components

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- React Router DOM
- Context API
- CSS Modules
- JavaScript

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- CORS

---

## 📂 Project Structure

```text
Student_Employee-Management-System/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   └── script.js
│
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── context/
│   │   │   ├── Home.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── SignUp.jsx
│   │   │   └── UserDetails.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── ...
│
└── README.md
```

---

## 🔄 Application Flow

```text
User
  ↓
React Frontend
  ↓
Express REST API
  ↓
Authentication Middleware
  ↓
Mongoose
  ↓
MongoDB Atlas
```

---

## 🔌 API Endpoints

| Method | Endpoint            | Description                         |
| ------ | ------------------- | ----------------------------------- |
| `POST` | `/users/register`   | Register a new user                 |
| `POST` | `/users/login`      | Authenticate user                   |
| `GET`  | `/users/userdetail` | Retrieve authenticated user details |

---

## ⚙️ Setup

```bash
git clone https://github.com/VIGNESH1280/Student_Employee-Management-System.git
cd Student_Employee-Management-System
```

### Backend

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file:

```env
PORT=5000
cloudDbUrl=YOUR_MONGODB_ATLAS_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Authentication

```text
Register
   ↓
Password hashed with bcrypt
   ↓
User stored in MongoDB
   ↓
Login
   ↓
Password verification
   ↓
JWT generated
   ↓
Protected API request
   ↓
JWT verification
```

---

## 🚧 Future Development

- Student management CRUD
- Employee management CRUD
- Admin dashboard
- Role-based access control
- Improved JWT handling
- Search & filtering
- Pagination
- Production deployment

---

## 👨‍💻 Author

**Vignesh C**

M.E. Computer Science & Engineering — Networks

**Interests:** Full-Stack Development • Backend Development • MERN Stack • Computer Networks

---

⭐ **If you find this project useful, consider giving it a star!**

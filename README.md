# University Campus Management System

## Project Overview

The **University Campus Management System** is a backend application developed using Node.js, Express.js, and MongoDB.

The project aims to manage university-related information through a centralized system. It provides RESTful APIs for managing students, faculty, courses, sections, enrollments, attendance, and announcements.

The system also includes authentication, role-based access control, analytics, real-time communication, and event-driven architecture.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt
- Socket.IO
- EventEmitter
- Postman

## Features

### 1. Student Management
- Create student records
- Retrieve student details
- Update student information
- Delete student records

### 2. Faculty Management
- Manage faculty information
- Perform CRUD operations on faculty records

### 3. Course Management
- Create and manage courses
- Retrieve course information
- Update and delete courses

### 4. Section Management
- Create and manage university sections
- Maintain section-related information

### 5. Enrollment Management
- Enroll students in courses
- Manage enrollment records
- Validate enrollment operations

### 6. Authentication
- User registration
- User login
- Password hashing using bcrypt
- JWT-based authentication

### 7. Role-Based Access Control
- Admin access
- Faculty access
- Student access
- Protected routes based on user roles

### 8. Attendance Management
- Mark student attendance
- Retrieve attendance records
- Calculate attendance percentage

### 9. Announcement Management
- Create announcements
- Retrieve announcements
- Delete announcements

### 10. Real-Time Communication
- Socket.IO integration
- Real-time announcement notifications

### 11. Analytics
- Total students
- Total faculty
- Total courses
- Total enrollments
- Enrollment statistics

### 12. Event-Driven Architecture
- EventEmitter integration
- Announcement-related event handling

## Project Structure

```text
University-Campus-Management/
│
├── controllers/
│   ├── studentController.js
│   ├── facultyController.js
│   ├── courseController.js
│   ├── sectionController.js
│   ├── enrollmentController.js
│   ├── authController.js
│   ├── attendanceController.js
│   ├── announcementController.js
│   └── analyticsController.js
│
├── models/
│   ├── Student.js
│   ├── Faculty.js
│   ├── Course.js
│   ├── Section.js
│   ├── Enrollment.js
│   ├── User.js
│   ├── Attendance.js
│   └── Announcement.js
│
├── routes/
│   ├── studentRoutes.js
│   ├── facultyRoutes.js
│   ├── courseRoutes.js
│   ├── sectionRoutes.js
│   ├── enrollmentRoutes.js
│   ├── authRoutes.js
│   ├── attendanceRoutes.js
│   ├── announcementRoutes.js
│   └── analyticsRoutes.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── utils/
│   └── eventEmitter.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd University-Campus-Management
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Replace the placeholder values with your actual MongoDB connection string and JWT secret.

### 5. Start the Server

```bash
npm run dev
```

The server will run on:

```text
http://localhost:5000
```

## API Base URL

```text
http://localhost:5000/api
```

## API Routes

| Module | Endpoint |
|---|---|
| Students | `/api/students` |
| Faculty | `/api/faculty` |
| Courses | `/api/courses` |
| Sections | `/api/sections` |
| Enrollments | `/api/enrollments` |
| Authentication | `/api/auth` |
| Attendance | `/api/attendance` |
| Announcements | `/api/announcements` |
| Analytics | `/api/analytics` |

## Authentication

The system uses JWT-based authentication to protect API endpoints.

Users must log in to receive an authentication token. Protected routes require a valid token.

Role-based access control restricts access according to user roles such as Admin, Faculty, and Student.

## Testing

The REST APIs can be tested using **Postman**.

Testing includes:
- CRUD operations
- User registration and login
- JWT authentication
- Role-based authorization
- Enrollment operations
- Attendance management
- Announcement management
- Analytics endpoints

## Database

MongoDB is used as the database, and Mongoose is used for schema definition, validation, and database operations.

## Author

**Ananya Agrawal**

B.Tech CSE (AI & ML)

## License

This project is developed for academic purposes.

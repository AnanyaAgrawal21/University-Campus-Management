
# University Campus Management System

A RESTful backend application developed using Node.js, Express.js, and MongoDB to manage university campus operations.

## Project Overview

The University Campus Management System provides APIs for managing students, faculty, courses, sections, enrollments, attendance, and announcements.

The project also includes authentication, role-based access control, analytics, and real-time communication using Socket.IO.

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
- Retrieve student information
- Update student records
- Delete student records

### 2. Faculty Management
- Manage faculty information
- Perform CRUD operations

### 3. Course Management
- Create and manage courses
- Retrieve course information
- Update and delete courses

### 4. Section Management
- Manage academic sections

### 5. Enrollment Management
- Enroll students in courses
- Check enrollment conditions
- Prevent duplicate enrollments

### 6. Authentication and Authorization
- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Role-Based Access Control (RBAC)

### 7. Attendance Management
- Record student attendance
- Retrieve attendance records
- Calculate attendance percentage

### 8. Announcement Management
- Create announcements
- Retrieve announcements
- Delete announcements
- Target announcements by user role

### 9. Real-Time Communication
- Socket.IO integration
- Real-time announcement events

### 10. Analytics
- Total student count
- Total faculty count
- Total course count
- Enrollment statistics using MongoDB aggregation

### 11. Event-Driven Architecture
- Node.js EventEmitter
- Custom announcement events

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
├── server.js
├── package.json
├── .env
└── README.md
```

## Installation and Setup

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Navigate to the Project

```bash
cd University-Campus-Management
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Configure Environment Variables

Create a `.env` file in the project root directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Replace the placeholder values with your actual configuration.

### Step 5: Start the Server

```bash
npm run dev
```

The backend server will run at:

```text
http://localhost:5000
```

## API Base URL

```text
http://localhost:5000/api
```

## API Routes

| Module | Base Endpoint |
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

Protected endpoints require a JWT access token.

In Postman:

1. Open the Authorization tab.
2. Select Bearer Token.
3. Enter the token received after login.

## Testing

The API can be tested using Postman.

Testing includes:

- CRUD operations
- User registration and login
- JWT authentication
- Role-based authorization
- Attendance operations
- Announcement operations
- Analytics endpoints

## Database

MongoDB Atlas is used as the database.

Mongoose is used for defining schemas, models, and database operations.

## Author

Ananya Agrawal

B.Tech Computer Science and Engineering  
Artificial Intelligence and Machine Learning

## License

This project was developed for academic and educational purposes.

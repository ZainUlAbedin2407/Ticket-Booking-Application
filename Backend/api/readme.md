# 🏨 Hotel Booking API

This is a full-featured RESTful API backend for a hotel booking application built with **Node.js**, **Express**, and **MongoDB**. It includes secure authentication, admin-protected routes, and CRUD operations for hotels, rooms, and users.

---

## 🚀 Features

- ✅ User registration & login with JWT authentication
- 🛡️ Role-based authorization (admin vs. user)
- 🏨 Hotel CRUD operations
- 🛏️ Room management by Hotel ID
- 👤 User profile management
- 📊 Hotel stats by city (count)
- 🍪 Cookie-based token handling
- ⚙️ Custom error handling middleware

---

## 📁 Folder Structure

```

.
├── controllers/
├── models/
├── routes/
├── utils/
├── connectDB/
├── .env
├── index.js
├── package.json

```

---

## 🧠 API Endpoints

### 🔐 Auth Routes (`/api/auth`)
| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| POST   | `/register`    | Register new user     |
| POST   | `/login`       | Login and get token   |

### 🏨 Hotel Routes (`/api/hotels`)
| Method | Endpoint                 | Protected | Description                 |
|--------|--------------------------|-----------|-----------------------------|
| POST   | `/`                      | Admin     | Create a hotel              |
| PUT    | `/:id`                   | Admin     | Update a hotel              |
| DELETE | `/:id`                   | Admin     | Delete a hotel              |
| GET    | `/find/:id`              | Public    | Get a hotel by ID           |
| GET    | `/`                      | Public    | Get all hotels              |
| GET    | `/countByCity`           | Public    | Get hotel count by city     |

### 🛏️ Room Routes (`/api/rooms`)
| Method | Endpoint                 | Protected | Description                        |
|--------|--------------------------|-----------|------------------------------------|
| POST   | `/:hotelId`              | Admin     | Create room for a specific hotel   |
| PUT    | `/:id`                   | Admin     | Update room                        |
| DELETE | `/:id/:hotelid`          | Admin     | Delete room and unlink from hotel  |
| GET    | `/:id`                   | Public    | Get room by ID                     |
| GET    | `/`                      | Public    | Get all rooms                      |

### 👤 User Routes (`/api/users`)
| Method | Endpoint        | Protected     | Description              |
|--------|-----------------|---------------|--------------------------|
| PUT    | `/:id`          | User/Admin    | Update user              |
| DELETE | `/:id`          | User/Admin    | Delete user              |
| GET    | `/:id`          | User/Admin    | Get user by ID           |
| GET    | `/`             | Admin         | Get all users            |

---

## 📦 Installation

```bash
git clone https://github.com/ZainUlAbedin2407/Booking-App-Backend
cd your-repo-name
npm install
npm run start
````

---

## ▶️ Usage

* Ensure MongoDB is running locally or using MongoDB Atlas.
* Run the development server:

```bash
npm run start
```

The server will be available at: `http://localhost:8000`

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB & Mongoose
* JWT (jsonwebtoken)
* dotenv & cookie-parser

---

## ✍️ Author

Developed by **[Zain Ul Abedin](https://github.com/ZainUlAbedin2407)**
Mentored by [Sir Sufiyan](https://www.linkedin.com/in/innosufiyan)
as part of the **Saylani Mass IT Training - MERN Stack Development Program**


````

---


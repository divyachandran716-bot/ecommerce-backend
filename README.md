# 🛒 E-Commerce Backend System

A secure and scalable backend system built using Node.js, Express, and MongoDB.
This project implements authentication, role-based access control, product management, order processing, and a basic recommendation system.

---

## 🚀 Features

### 🔐 Authentication & Authorization

* User Signup & Login
* Password hashing using bcryptjs
* JWT-based authentication
* Role-Based Access Control (Admin & User)

### 📦 Product Management

* Create, Read, Update, Delete (CRUD) products
* Product filtering (category, price range)
* Search by keyword
* Sorting (price ascending/descending)

### 👤 User Profile

* Get logged-in user profile
* Update profile
* Delete user (Admin or Self)
* Admin can view all users

### 🛒 Order Management

* Place orders
* Store product details with quantity
* Track order status

### 🤖 Recommendation System

* Suggest products based on category
* Basic predictive logic implemented

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* bcryptjs
* jsonwebtoken
* dotenv
* cors

---

## 📁 Folder Structure

```
ecommerce-backend/
│
├── index.js
├── .env
│
├── /config
│   └── dbConnection.js
│
├── /models
│   ├── user.js
│   ├── product.js
│   └── order.js
│
├── /controllers
│   ├── authentication.js
│   ├── userProfile.js
│   ├── productController.js
│   ├── orderController.js
│   └── analyticsController.js
│
├── /routes
│   ├── authenticationRoutes.js
│   ├── userProfileRoutes.js
│   ├── productRoutes.js
│   ├── orderRoutes.js
│   └── analyticsRoutes.js
│
├── /middleware
│   ├── authMiddleware.js
│   └── errorHandler.js
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```
git clone https://github.com/your-username/ecommerce-backend.git
cd ecommerce-backend
```

### 2. Install Dependencies

```
npm install
```

### 3. Setup Environment Variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

### 4. Run Server

```
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

## 🔗 API Endpoints

### 🔐 Auth

* POST `/api/auth/signup`
* POST `/api/auth/login`

### 👤 Users

* GET `/api/users` (Admin only)
* GET `/api/users/me`
* PUT `/api/users/me`
* DELETE `/api/users/:id`

### 📦 Products

* POST `/api/products` (Admin only)
* GET `/api/products`
* GET `/api/products?keyword=phone&minPrice=1000&sort=-price`

### 🛒 Orders

* POST `/api/orders`

### 🤖 Analytics

* GET `/api/analytics/recommend?category=electronics`

---

## 🔒 Security

* Passwords are hashed using bcryptjs
* JWT tokens used for authentication
* Protected routes using middleware
* Role-based authorization implemented

---

## 🧪 Testing

API testing done using Thunder Client / Postman.

Includes:

* Authentication testing
* Protected routes
* CRUD operations
* Role-based access validation

---

## 📊 Evaluation Highlights

✔ Clean folder structure
✔ Secure authentication (JWT + bcrypt)
✔ Fully functional CRUD APIs
✔ Role-based access control
✔ Product filtering & search
✔ Recommendation system
✔ Error handling middleware

---

## 📌 Future Improvements

* Advanced recommendation using RapidMiner
* Payment integration
* Order history tracking
* Pagination & optimization

---

## 👨‍💻 Author

Developed as part of Backend Module Assignment.


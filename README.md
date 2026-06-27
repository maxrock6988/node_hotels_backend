# 🏨 Hotel Backend API

A RESTful Backend API built using **Node.js**, **Express.js**, and **MongoDB** for managing hotel operations. This project provides CRUD APIs for managing menu items and staff information while following a clean and scalable project structure.

---

## 🚀 Live Demo

🔗 **Hosted API:**
https://node-hotels-backend-4.onrender.com

> **Note:** This project is hosted on Render's free tier. If the server has been inactive, the first request may take **30–60 seconds** to respond.

---

## ✨ Features

* RESTful API Architecture
* Express.js Server
* MongoDB Atlas Integration
* Mongoose ODM
* CRUD Operations
* Modular Route Structure
* Environment Variables Support
* JSON Request & Response
* Error Handling
* Easy Deployment

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv
* Nodemon

---

## 📂 Project Structure

```text
Hotel-Backend/
│
├── models/
│   ├── MenuItem.js
│   └── Person.js
│
├── routes/
│   ├── menuRoutes.js
│   └── personRoutes.js
│
├── db.js
├── server.js
├── package.json
├── package-lock.json
├── .env
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
```

### 2. Navigate to the project folder

```bash
cd YOUR_REPOSITORY_NAME
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
MONGODB_URL=your_mongodb_connection_string
PORT=3000
```

### 5. Start the development server

```bash
npm run dev
```

or

```bash
node server.js
```

---

# 📌 API Endpoints

## Home Route

### GET /

Returns a welcome message.

---

# 🍽️ Menu APIs

## Get All Menu Items

```http
GET /menu
```

---

## Add a Menu Item

```http
POST /menu
```

### Example Request Body

```json
{
  "name": "Chicken Biryani",
  "price": 220,
  "taste": "Spicy",
  "is_drink": false,
  "ingredients": [
    "Rice",
    "Chicken",
    "Masala"
  ],
  "num_sales": 120
}
```

---

## Update a Menu Item

```http
PUT /menu/:id
```

Example

```http
PUT /menu/6855abcd123456789
```

Request Body

```json
{
  "price": 250
}
```

---

## Delete a Menu Item

```http
DELETE /menu/:id
```

---

# 👨 Person APIs

## Get All Persons

```http
GET /person
```

---

## Add a Person

```http
POST /person
```

Example Request Body

```json
{
  "name": "John Doe",
  "age": 24,
  "work": "Chef",
  "mobile": "9876543210",
  "email": "john@example.com"
}
```

---

## Update Person

```http
PUT /person/:id
```

---

## Delete Person

```http
DELETE /person/:id
```

---

# 📦 Sample Response

```json
{
  "_id": "6855abcd123456789",
  "name": "Chicken Biryani",
  "price": 220,
  "taste": "Spicy",
  "is_drink": false,
  "ingredients": [
    "Rice",
    "Chicken",
    "Masala"
  ],
  "num_sales": 120,
  "__v": 0
}
```

---

# 🧪 API Testing

You can test the APIs using:

* Postman
* Thunder Client (VS Code)
* Insomnia

---

# 🌍 Environment Variables

Create a `.env` file in the root directory.

```env
MONGODB_URL=your_mongodb_connection_string
PORT=3000
```

---

# 🚀 Deployment

This project is deployed on **Render**.

**Live URL**

https://node-hotels-backend-4.onrender.com

---

# 📈 Future Improvements

* JWT Authentication
* User Login & Signup
* Role-Based Authorization
* Image Upload Support
* API Documentation (Swagger)
* Unit Testing
* Docker Support

---

# 🤝 Contributing

Contributions are always welcome.

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 👨‍💻 Author

**Maxy**

Electronics & Communication Engineering (ECE)
National Institute of Technology Agartala (NIT Agartala)

GitHub: https://github.com/YOUR_GITHUB_USERNAME

---

# ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub. It helps others discover the project and motivates further development.

Thank you for visiting!

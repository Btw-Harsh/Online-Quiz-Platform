## 🚀 Project Overview

This is a full-stack **MERN Online Quiz Platform** built to provide a smart and interactive learning experience. Users can attempt quizzes, view their progress, and get instant results, while admins can create and manage quiz content with ease.
The system also includes **AI-powered question generation** to help admins quickly prepare quizzes.

---

## ✨ **Key Features**

### 🔐 **Secure Authentication**

* JWT-based login & registration
* Role-based access (User / Admin)
* Protected API routes

### 🤖 **AI Question Generator**

* Powered by **Google Gemini API**
* Automatically generates MCQs
* Creates explanations for answers

### 📝 **Quiz Experience**

* Live timer
* Auto calculation of score
* Summary & detailed result view
* Progress tracking dashboard

### 🛠️ **Admin Controls**

* Create / edit / delete quizzes
* AI-assisted question creation
* View results, attempts, statistics
* Searchable and sortable tables

### 🎨 **Modern UI**

* Fully responsive
* Clean dark theme
* Built with **TailwindCSS + React**
* Vite bundler for faster development

---

## 🧰 **Tech Stack**

### **Frontend**

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router

### **Backend**

* Node.js
* Express
* MongoDB & Mongoose
* JWT Authentication

### **Third-Party Services**

* Google Gemini API
* REST APIs

---

## 📦 **Prerequisites**

Install these before setup:

* Node.js
* npm
* MongoDB (local or Atlas)
* Gemini API Key

---

## ⚡ **Project Setup**

### **1️⃣ Clone Repository**

```bash
git clone <your_repo_link>
cd online-quiz-platform
```

---

## **2️⃣ Backend Setup**

```bash
cd backend
npm install
```

Create `/.env` file

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/quizdb
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRE=1h
NODE_ENV=development
```

Start backend:

```bash
npm run dev
```

Backend runs on: **[http://localhost:5000](http://localhost:5000)**

---

## **3️⃣ Frontend Setup**

```bash
cd frontend
npm install
```

Create `/.env` file:

```
VITE_API_BASE_URL=http://localhost:5000/api
VITE_GEMINI_API_KEY=your_gemini_api_key
```

Start frontend:

```bash
npm run dev
```

Frontend runs on: **[http://localhost:5173](http://localhost:5173)**

---

## 📖 **User Guide**

### **For Users**

* Register → `/register`
* Login → `/login`
* Choose quiz & start test
* Get results instantly
* Check previous attempts

### **For Admins**

* Login with admin role
* Create quizzes (manual or AI-generated)
* Update quiz details
* Delete quizzes
* Monitor stats and user attempts

---

## 🗂️ **Project Folder Structure**

```
online-quiz-platform/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── App.jsx
│   └── public/
│
└── README.md
```

---

## 🔧 **Important API Routes**

### **Auth**

* `POST /api/auth/register`
* `POST /api/auth/login`
* `GET /api/auth/profile`

### **Quizzes**

* `GET /api/quizzes`
* `POST /api/quizzes` (admin)
* `PUT /api/quizzes/:id` (admin)
* `DELETE /api/quizzes/:id` (admin)

### **Results**

* `POST /api/results`
* `GET /api/results/user/:id`
* `GET /api/results/quiz/:id`

---

## 🧪 **Testing**

```bash
cd backend
npm test
```

```bash
cd frontend
npm test
```

---

## 🚀 **Deployment**

### **With Docker**

```bash
docker-compose up --build
```

### **Manual**

* Backend → Render / Railway / DigitalOcean
* Frontend → Netlify / Vercel
* Database → MongoDB Atlas

Production env:

```
NODE_ENV=production
MONGO_URI=your_atlas_url
JWT_SECRET=your_prod_secret
FRONTEND_URL=your_frontend_url
```

---

## 👤 **Author**

**Harsh Sharma**
Email: harshsharma49411@gmail.com

---

## 🙏 Acknowledgements

* Google Gemini API
* MongoDB
* React Community
* TailwindCSS

# 📝 TaskFlow - Full Stack Task Management System

TaskFlow is a modern, full-stack task management application designed to help users organize, track, and manage their daily tasks efficiently. Built with the **MERN Stack**, it features a sleek UI, real-time updates, and a robust authentication system.

## 🚀 Features

- **User Authentication**: Secure Login and Registration using JWT.
- **Task Management**: Full CRUD (Create, Read, Update, Delete) functionality for tasks.
- **Status Tracking**: Categorize tasks as *Pending*, *In Progress*, or *Completed*.
- **Dashboard Stats**: Visual overview of task progress and statistics.
- **Advanced Filtering**: Search tasks by title or description and filter by status.
- **Responsive UI**: Fully responsive design that works on Mobile, Tablet, and Desktop.
- **Modern Tech Stack**: Uses the latest frontend and backend technologies for performance and scalability.

## 🛠️ Tech Stack

### Frontend
- **React.js (Vite)** - Fast development and build process.
- **Tailwind CSS** - Modern styling and layout.
- **Shadcn/ui** - High-quality accessible components.
- **TanStack React Query** - Efficient server state management and caching.
- **Lucide React** - Beautiful icon set.
- **Zustand** - Lightweight state management for authentication.

### Backend
- **Node.js & Express** - Scalable backend architecture.
- **MongoDB & Mongoose** - NoSQL database for flexible data storage.
- **JSON Web Token (JWT)** - Secure stateless authentication.
- **Zod** - Schema validation for API requests.

---

## 📂 Project Structure

```text
├── backend/            # Express API, Models, Controllers, Middlewares
├── frontend/           # React App, Components, Hooks, State Management
├── .env                # Environment variables (Root)
└── package.json        # Main project configuration
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Setup Backend
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` folder and add your credentials:
```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
```

### 4. Run the Application
In the root directory, you can run both (if configured) or run them separately:
```bash
# Start Backend
cd backend
npm run dev

# Start Frontend
cd frontend
npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and get token |
| GET | `/api/tasks` | Get all tasks for the user |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update an existing task |
| DELETE | `/api/tasks/:id` | Delete a task |

---

Built with ❤️ by [Sabir Salad From Dugsiiye Mentorship Program]# Full-Stack-MERN

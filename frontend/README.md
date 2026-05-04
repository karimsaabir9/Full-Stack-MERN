# 🚀 Task Manager - Frontend

A modern, responsive, and high-performance frontend for the Full-Stack MERN Task Management application. Built with **React 19**, **Vite**, and **Tailwind CSS 4**.

## ✨ Features

- 🔐 **Authentication**: Secure Login & Registration system.
- 📊 **Dashboard**: Interactive user dashboard to manage tasks.
- 🛡️ **Admin Panel**: Role-based access for administration tasks.
- 🌓 **Dark Mode**: Seamless theme switching using `next-themes`.
- 📱 **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- ⚡ **Performance**: Built with Vite for ultra-fast development and optimized production builds.
- 🔔 **Toast Notifications**: Interactive feedback using `sonner`.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query/latest)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **HTTP Client**: [Axios](https://axios-http.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   The application automatically switches between local and production APIs. If you need to customize it, check `src/lib/api/apiClient.js`.

4. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production

To create an optimized production build:
```bash
npm run build
```

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI components (Shadcn/ui)
├── pages/          # Application pages (Auth, Dashboard, Admin)
├── lib/            # External libraries config (Axios, API Client)
├── store/          # State management (Zustand)
├── hooks/          # Custom React hooks
├── assets/         # Static assets (images, icons)
└── utils/          # Helper functions
```

## 🌐 API Configuration

The frontend is configured to communicate with the backend based on the environment:
- **Development**: `http://localhost:3000/api`
- **Production**: `https://full-stack-mern-q50n.onrender.com/api`

---
Built with ❤️ by [Karim Sabir](https://github.com/karimsaabir9)

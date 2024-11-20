# MERN Task Manager App

![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

A feature-rich task management application built with the MERN stack (MongoDB, Express, React, Node.js). It offers seamless task management with capabilities such as user authentication using JWT and Google OAuth, task creation, intuitive drag-and-drop task organization, and more.

![Task Manager App home](/images/home.png)
![Task Manager App signup](/images/signup.png)
![Task Manager App login](/images/login.png)
![Task Manager App taskdetail](/images/taskdetails.png)
![Task Manager App edittask](/images/taskedit.png)

## 🌟 Features

- **User Authentication**: Secure login, registration, and logout using JWT (HttpOnly cookies) for protection against XSS attacks. Google OAuth is also integrated.
- **Task Management**: Users can create, search, update, and delete tasks.
- **Drag-and-Drop**: Easily manage tasks between "To Do", "In Progress", and "Done" columns.
- **Protected Routes**: Only authenticated users can access protected pages, and already logged-in users cannot access login or signup pages.
- **Optimistic Updates**: React Query is used for server-side caching and optimistic UI updates.
- **Responsive UI**: Developed with React Beautiful DnD and customized UI components.


 ## 🌟 Features

- **Secure User Authentication**: Login, register, and logout securely with JWT stored in HttpOnly cookies to prevent XSS attacks. Integrated Google OAuth for convenient access.
- **Comprehensive Task Management**: Create, update, search, and delete tasks effortlessly.
- **Intuitive Drag-and-Drop**: Organize tasks seamlessly across "To Do," "In Progress," and "Done" columns.
- **Route Protection**: Guarded pages accessible only to authenticated users, with restricted access to login and signup pages for already logged-in users.
- **Optimistic UI Updates**: Leverages React Query for efficient server-side caching and a smooth user experience with optimistic updates.
- **Responsive Design**: Built with React Beautiful DnD and custom UI components for a responsive and user-friendly interface.

## 🛠️ Technologies Used

### Frontend:

- **React** (v18.3.1)
- **Redux Toolkit** for global state management
- **React Router** for routing
- **React Query** for handling server data and caching
- **React Hook Form** (with Zod validation)
- **React Beautiful DnD** for drag-and-drop interactions
- **Axios** for HTTP requests
- **Flowbite-React** for UI components
- **React Toastify** for user notifications

### Backend:

- **Node.js** (v18.x)
- **Express.js** (v4.19.2) for the API
- **MongoDB** with **Mongoose** for the database
- **JWT** for user authentication
- **Bcrypt.js** for password hashing
- **Cookie-Parser** for handling JWT cookies

## 🚀 Live Demo

Live Demo 

## 🏁 Getting Started Locally

To get this project running on your local machine, follow these steps:

### Prerequisites

- **Node.js** (v18.x or later)
- **MongoDB** (local installation or MongoDB Atlas)


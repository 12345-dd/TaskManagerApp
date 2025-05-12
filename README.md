# Task Management Application

A full-stack task management application using Node.js, Express, MongoDB, React.js, and Material UI. It supports task creation, reading, updating, deleting, and searching with a clean UI and responsive design.

## Features

- Add, view, update, and delete tasks
- Search tasks by title
- MVC architecture on the backend
- Form validation using react-hook-form
- Responsive UI with Material UI

## Tech Stack

**Frontend**: React.js, Material UI, react-hook-form  
**Backend**: Node.js, Express.js, MongoDB (Mongoose)  
**Deployment**: Frontend on Netlify | Backend on Render

## Database Design


**Task**
| Field         | Type     | Description                      |
|---------------|----------|----------------------------------|
| _id           | ObjectId | Unique identifier (auto)         |
| title         | String   | Title of the task                |
| description   | String   | Detailed info about the task     |
| dueDate       | Date     | Deadline for the task            |
| status        | String   | Task status (Pending/Completed)  |
| createdAt     | Date     | Auto-generated                   |
| updatedAt     | Date     | Auto-generated                   |


## Folder Structure

### Backend (`/backend`)
- `app.js`: Entry point
- `/models/TaskModel.js`: Mongoose schema
- `/controllers/TaskController.js`: Logic for each route
- `/routes/TaskRoutes.js`: All routes

### Frontend (`/frontend`)
- `/components/TaskForm.js`: Modal for add/edit
- `/components/TaskList.js`: Task display
- `App.js`,`main.js`


## **Live Demo**

The project is hosted on Netlify. You can access it here:

**https://taskmancer.netlify.app/**



import React, { useState, useEffect } from 'react';
import {
  Container, Typography, Button, Card, CardContent,
  TextField, IconButton,
  Box
} from '@mui/material';
import Grid from '@mui/material/Grid'
import { Edit, Delete } from '@mui/icons-material';
import TaskForm from './TaskForm';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const fetchTasks = async () => {
    const res = await axios.get('https://taskmanagerbackend-3t9s.onrender.com/tasks');
    setTasks(res.data.data);
  };

  const handleSearch = async () => {
    const res = await axios.get(`https://taskmanagerbackend-3t9s.onrender.com/tasks/search?keyword=${search}`);
    setTasks(res.data.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://taskmanagerbackend-3t9s.onrender.com/tasks/${id}`);
    fetchTasks();
  };

  const handleSubmit = async (data) => {
    if (editTask) {
      await axios.put(`https://taskmanagerbackend-3t9s.onrender.com/tasks/${editTask._id}`, data);
    } else {
      await axios.post('https://taskmanagerbackend-3t9s.onrender.com/tasks', data);
    }
    fetchTasks();
    handleCloseForm();
  };

  const handleOpenForm = (task = null) => {
    setEditTask(task);
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setEditTask(null);
    setOpenForm(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom mb={3}>
        Task Manager
      </Typography>

      <Grid container spacing={2} alignItems="center" sx={{ marginBottom: 2,display:"flex",justifyContent:"center" }}>
        <Grid item xs={8}>
          <TextField
            label="Search Tasks"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" fullWidth onClick={handleSearch}>Search</Button>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center">
      <Button variant="contained" color="primary" alignItems="center" onClick={() => handleOpenForm()} sx={{ marginBottom: 2 }}>
        Add Task
      </Button>
      </Box>

      <Grid container spacing={2}>
        {tasks.map(task => (
          <Grid item xs={12} sm={6} md={4} key={task._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{task.title}</Typography>
                <Typography>{task.description}</Typography>
                <Typography variant="body2">Due: {task.dueDate?.substring(0, 10)}</Typography>
                <Typography variant="body2">Status: {task.status}</Typography>
                <IconButton onClick={() => handleOpenForm(task)}><Edit /></IconButton>
                <IconButton onClick={() => handleDelete(task._id)}><Delete /></IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <TaskForm
        open={openForm}
        onClose={handleCloseForm}
        onSubmit={handleSubmit}
        initialData={editTask}
      />
    </Container>
  );
};

export default TaskList;

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem
} from '@mui/material';

const TaskForm = ({ open, onClose, onSubmit, initialData }) => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  useEffect(() => {
    reset({
      title: initialData?.title || '',
      description: initialData?.description || '',
      dueDate: initialData?.dueDate?.substring(0, 10) || '',
      status: initialData?.status || 'Pending'
    });
  }, [initialData, reset]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{initialData ? 'Edit Task' : 'Add Task'}</DialogTitle>
      <DialogContent>
        <form id="task-form" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Title"
            fullWidth
            margin="dense"
            {...register('title', { required: true })}
          />
          <TextField
            label="Description"
            fullWidth
            margin="dense"
            multiline
            rows={3}
            {...register('description')}
          />
          <TextField
            type="date"
            label="Due Date"
            fullWidth
            margin="dense"
            InputLabelProps={{ shrink: true }}
            {...register('dueDate')}
          />
          <TextField
            label="Status"
            select
            fullWidth
            margin="dense"
            {...register('status')}
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
          </TextField>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit" form="task-form" variant="contained">
          {initialData ? 'Update' : 'Create'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskForm;


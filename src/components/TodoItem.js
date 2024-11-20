import React from 'react';
import { Button, Typography } from '@mui/material';
import ListItem from '@mui/material/ListItem';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <ListItem>
            <Typography
                sx={{ pr: 2, cursor: 'pointer', textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => toggleTodo(todo.id)}
            >
                {todo.text}
            </Typography>
            <Button variant={'contained'} size='small' onClick={() => deleteTodo(todo.id)}>Delete</Button  >
        </ListItem>
    );
}

export default TodoItem;

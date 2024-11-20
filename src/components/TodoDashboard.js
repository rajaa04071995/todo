import React, { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

function TodoDashboard() {
    const [todos, setTodos] = useState([]);

    //to add a new todo
    const addTodo = (todo) => {
        //to add new todo to the existing list
        setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
    };

    //to mark todo as completed
    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    //to remove from todo
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <Box p={2}>
            <Typography variant='h6' pb={2}>Todo Dashboard</Typography>
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </Box>
    );
}

export default TodoDashboard;

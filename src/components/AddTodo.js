import React, { useState } from 'react';
import { TextField, Button, Grid2 } from '@mui/material';

function AddTodo({ addTodo }) {
    //intialize state
    const [todo, setTodo] = useState("");

    //
    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.length) {
            addTodo(todo);
            setTodo("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid2 container spacing={2} alignItems={'center'}>
                <Grid2>
                    <TextField
                        type="text"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        placeholder="Add a new todo"
                    />
                </Grid2>
                <Grid2>
                    <Button type="submit" size='large' variant='contained'>Add</Button>
                </Grid2>
            </Grid2>
        </form>
    );
}

export default AddTodo;

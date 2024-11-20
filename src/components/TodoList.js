import React from 'react';
import TodoItem from './TodoItem';
import List from '@mui/material/List';
import { Card } from '@mui/material';

function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <Card variant='outlined'>
            <List>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </List>
        </Card>
    );
}

export default TodoList;

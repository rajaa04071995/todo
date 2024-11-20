import React, { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    function increment() {
        // count = count + 1; // Buggy line
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
export default Counter;


// Section 4: Data Caching and Optimization (5 minutes)
// Scenario:
// You have a Node.js application using Redis for caching.
// ● Explain when you would use caching and provide a code snippet to implement
// caching for frequently accessed data in Redis

/**
 * redis is in memory data storage we can store fequently used data like tokens and can be accessed when needed.
 * 
 * we can check whether data is found in redis if not we can fetch from database and store it in redis as hashed value or as string as per requirement
 */
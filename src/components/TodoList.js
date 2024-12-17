import React, { useState, useEffect } from "react";

function TodoList () {
    const [ todos, setTodos ] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });


    const [ newTodo, setNewTodo ] = useState("");

    const addTodo = () => {
        if ( newTodo.trim() === "") return;
        setTodos([ ...todos, { text: newTodo, completed: false}]);
        setNewTodo("");
    };

    useEffect (() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ));
    }, [todos]);


return (
    <div>
        <h2> To-Do list </h2>
        <input 
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}> Add </button>

        <ul>
            {todos.map((todo,index) => (
                <li key={index}>{todo.text}</li>
            ))}
        </ul>
    </div>
);

}

export default TodoList;
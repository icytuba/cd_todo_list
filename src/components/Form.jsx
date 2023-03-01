import React, { useState } from 'react'


const Form = ({todoList, setTodoList}) => {
    const [todoItem, setTodoItem] = useState({
        content:"",
        isCompleted: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoList([...todoList, todoItem])
        setTodoItem({...todoItem, content:""})
    }

    const handleChange = (e) => {
        setTodoItem({ ...todoItem, content: e.target.value })
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="">Add Item to To-Do List:</label>
                <input type="text" value={ todoItem.content } onChange={ handleChange } />
                <input type="submit" value="Add to List!" />
            </form>
        </div>
    )
}

export default Form
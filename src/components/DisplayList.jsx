import React, { useState } from 'react'

const DisplayList = ({todoList, setTodoList}) => {

    //honestly with this part I had to watch the video I could not figure it out after an hour :/
    const handleChange = (index) => {
        const updatedList = todoList.map((task, i) => {
            if(i===index){
                task.isCompleted = !task.isCompleted; //apparently this is considered to be changing state, I'm
                // guessing because it's like spread? where the object key refers to the original copy's key pair?
            }
            return task; //this is saying return each task being iterated through, including the one at index of interest
            // which will be modified to by the conditional, and then also returned to the new array
        });
        setTodoList(updatedList);
    }

    const handleDelete = (e, index) => {
        console.log(index);
        const slicedTodoList = [...todoList.slice(0,index), ...todoList.slice(index+1)]
        console.log(slicedTodoList);
        setTodoList(slicedTodoList);
    }
    // for this handleDelete function, it might have been better to do the instructor's way of filtering:
    // const filteredTodos = todoList.filter((todo, index) => i !== index) (and then setTodoList to filteredTodos)
    
    const styling = (isCompleted) => {
        if(isCompleted) {
            return "completed";
        }
    }

    return (
        <div>
            <ul>
                {
                todoList.map( ( listItem, index ) =>(
                    <li key={index}>
                        <div>
                            <label className={styling(listItem.isCompleted)}>{listItem.content}</label>
                            <input type="checkbox" checked={listItem.isCompleted} onChange={(e) => handleChange(index)}/>
                            <button onClick={(e) => handleDelete(e,index)}>Delete</button>
                        </div>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default DisplayList
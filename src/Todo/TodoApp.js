import { React, useState } from "react"
import "./Todo.css";

const ToddoApp = () => {
    let [todo, setTodo] = useState("");
    let [todoItems, settodoItems] = useState([])
    let [isTodo, setisTodo] = useState(false)

    const addTodo = () => {
        if (todo !== "") {
            settodoItems(todoItems = [...todoItems, todo])
            setisTodo(true)
        } else {
            alert("Make Todo")
            if(todoItems.length>0){
                setisTodo(true)
            }else{
                setisTodo(false)
            }
        }
        setTodo("")

    }

    const deleteTodo = (id) => {
        let todoList = todoItems.filter((val, ind) => {
            return ind !== id ? val : null

        })
        settodoItems(todoList)
        setTodo("")

        if( todoItems.length===1){
            setisTodo(false)
        }
    }

    const deleteAll = () => {
        settodoItems([])
        setisTodo(false)
    }

    return <>
        <div className="todo">
            <h1 className='heading'>Todo App</h1>
            <div className="container">
                <div className='todo_container'>

                    <div className="add_todo">
                        <input type="text" value={todo} onChange={(e) => { setTodo(e.target.value) }} className="todo_input" />
                        <button className="btn" onClick={addTodo} >Add Todo</button>
                    </div>

                    <ul className="todo_list">
                        {
                            todoItems.map((item, ind) => {
                                return (
                                    <div className="todo_item" key={ind}>
                                        <li className="todos" name={item}>{item}</li>
                                        <button onClick={() => { deleteTodo(ind) }} className="deleteBtn ">Delete </button>
                                    </div>
                                )
                            })
                        }
                    </ul>

                    {
                        isTodo && <button className="clearBtn" onClick={deleteAll}>Clear All</button > 
                    }

                </div>
            </div>
        </div>
    </>
}

export default ToddoApp
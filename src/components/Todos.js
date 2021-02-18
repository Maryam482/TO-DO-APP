import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {delTodo, editTodo} from '../features/todolist/todoSlicer'
import styles from './Todo.module.css'
import {BsX} from 'react-icons/bs'
import {GrUpdate} from 'react-icons/gr'
function Todos() {
    const state = useSelector(state => state.todo.todos)
    const dispatch = useDispatch()
    const handleDel = (id) => {
        dispatch(delTodo(id,state))
    }
    const handleEdit = (id) => {
        let title = prompt("Enter title");
        let newTodo = {id:id, text: title}
        console.log(newTodo)
        dispatch(editTodo(newTodo))
    }
    return (
        <div>
            {
                state.map((item) => {
                    console.log(item)
                 return (
                    <div key={item.id} className={styles.flex} style={{margin:"15px"}}>
                    <table key={item.id}>
                        <tr>
                            <td><li key={item.id}>{item.text}</li></td>
                            <td>
                                <button className={styles.button} onClick={() => handleDel(item.id)}><BsX/></button>
                            </td>
                            <td>
                                <button className={styles.button2} onClick={() => handleEdit(item.id)}>Update</button>
                            </td>
                        </tr>
                    </table>
                    </div>
                 )
                })
            }
        </div>
    )
}

export default Todos
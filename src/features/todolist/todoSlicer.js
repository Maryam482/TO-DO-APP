import { createSlice } from '@reduxjs/toolkit';

export const todoSlicer = createSlice({
    name: 'todolist',
    initialState: {
        todos: [{text:'Good Morning', id:1}],
    },
    reducers: {
        addTodo(state, action) {
            // const { id, text } = action.payload
            // return [...state,{ id : Math.random(0,9), 
            //     text : action.payload,
            //     completed: false}]
            state.todos.push({ 
                id : Math.random(0,9), 
                text : action.payload,
                completed: false
            })
        },
        delAll(state){
            state.todos.length = 0
        },
        delTodo(state, action){
            state.todos = state.todos.filter((item) => 
                item.id !== action.payload
            )
        },
        editTodo(state, action){
            let updatedTodo = state.todos.find((item) =>{
                console.log("KK")
                console.log(item.id)
                console.log(parseFloat(action.payload.id))

                if (item.id == parseFloat(action.payload.id) ) {
                    item.text = action.payload.text 
                    console.log("IN")
                }
            }
                
            )
            return updatedTodo
        }

    },
})

export const {addTodo, delAll, delTodo, editTodo} = todoSlicer.actions;
export default todoSlicer.reducer



// We can return directly it will set in state but if we have multiple properties set data by yourself
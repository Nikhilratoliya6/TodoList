import React from 'react'
import {TodoItems} from "./TodoItems";
export const Todos = (props) => {
  return (
    <div>
        <div className='container'>
            <h3 className='text-center my-3'>Todos List</h3>
            {/* here we pass the todo value in the todoItems component */}
           <TodoItems todo={props.todo[1]}/> 
            
        </div>
    </div>
  )
}

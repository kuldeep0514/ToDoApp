import { useState } from "react";
import styles from './form.module.css'
export default function Form({Todos , setTodos}){

    const [Todo,setTodo]=useState({name:"",done:false});
      

    function handleSubmit(e){
        e.preventDefault();
        setTodos([...Todos,Todo])
        setTodo({name:"",done:false});
    }
    return(
            <form className={styles.todoform}  onSubmit={handleSubmit}>
                <div className={styles.tododiv}>
                <input className={styles.todoinput} onChange={(e)=>setTodo({name:e.target.value,done:false})} 
                value={Todo.name} 
                placeholder="Enter ToDo Items"
                type="text" />
                <button className={styles.todobutton}
                    type="Submit">Add</button>
                </div>
            </form>
    );
}
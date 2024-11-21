import { useState } from "react";
import Form from "./Form";
import TooDoList from "./TooDoList";
import Footer from "./Footer";

export default function Todo(){
    
    const [Todos,setTodos]=useState([]);
    const completedTodos=Todos.filter((Todo)=>Todo.done).length
    const totalTodos = Todos.length
    return(
        <div>
            <Form Todos={Todos} setTodos={setTodos}/>

            <TooDoList Todos={Todos} setTodos={setTodos}/>

            <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
        </div>
    );
}
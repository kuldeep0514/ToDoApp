import TodoItems from "./TodoItems";
import styles from "./todolist.module.css"
export default function TooDoList({Todos,setTodos}){
    const SortedTodos = Todos.slice().sort((a,b)=> Number(a.done)-Number(b.done));
    return(
        <div className={styles.list}>
            
            {SortedTodos.map(items=>((
                <TodoItems key={items.name} items={items} Todos={Todos} setTodos={setTodos}/>
            )))}
            
        </div>
    );
}
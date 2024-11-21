import styles from "./todoitems.module.css"
export default function TodoItems({items,Todos,setTodos}){
    function handledelete(items){
        setTodos(Todos.filter((Todo)=>Todo !==  items));   
    }
    function handleClick(name){
        setTodos(Todos.map((todo)=> todo.name===name ? {...todo,done:!todo.done}:todo)
        )
        console.log(name)
    }
    console.log(Todos)
    const comp= items.done ? styles.completed:"";
    return(
        <div className={styles.item}>
            <div className={styles.itemname}>
                <span className={comp} onClick={() => handleClick(items.name)}> {items.name} </span>
                
                <span>
                    <button onClick={()=>handledelete(items)} className={styles.button}>x</button>
                </span>
            </div>
            <hr className={styles.line}/>
        </div>
    );
}
import React, { useState, useEffect } from "react";
import axios from "axios";

const Todos = () => {
const [todoList, setTodoList]:any = useState(null);

useEffect(() => { ( async () => {
    const todos:any = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log("LOLI", todos)
    if(todos !== undefined) setTodoList(todos.data); 
})();
}, []);
return todoList ? (
<ul>
    { todoList.map((todo:any, index:number) => ( <li key={index} data-testid='todo'>{todo.title}</li> )) }
</ul> ) : ( <p>Loading....</p> );
};

export default Todos;
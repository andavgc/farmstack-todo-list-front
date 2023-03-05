import TodoItem from "./Todo";

function TodoView(props) {

    if(props.todoList.length === 0) {
        return(
            <div></div>
        )
    }

    return (
        <div>
            <ul>
                {props.todoList.map(todo => <TodoItem todo={todo} />)}
            </ul>
        </div>
    )
}

export default TodoView;
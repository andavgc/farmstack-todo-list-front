import axios from 'axios';
import React from 'react';

function TodoItem(props) {
    const deleteTodoHandler = (title) => {
        console.log(title)
        axios.delete(`http://localhost:8000/api/todo/${title}`)
        .then(resp => console.log(resp.data))
    }

    return(
        <div>
            <p>
                <span style={{fontWeight: 'bold, underline'}}>{props.todo.title} :</span> {props.todo.description}
                <buttom onClick={() => deleteTodoHandler(props.todo.title)}
                className="btn btn-outline-danger my-2 mx-2" style={{'borderRadius':'50px',}}>X</buttom>
                <hr></hr>
            </p>
        </div>
    )
}

export default TodoItem;
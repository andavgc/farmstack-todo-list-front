import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoView from './components/TodoListView';


function App() {

  const [todoList, setTodoList] = useState([{}]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  //Read all todos
  useEffect(() => {
    axios.get('http://localhost:8000/api/todo')
    .then((resp) => {
      setTodoList(resp.data)
    })
    .catch((error) => console.log(error))
  });

  //Post a todo
  const addTodoHandler = () => {
    if (title ==="" || desc ==="") {
      return alert("You need to write the task")
    }
    axios.post('http://localhost:8000/api/todo', { 'title': title, 'description' : desc})
    .then((resp) => console.log(resp))
    .catch((error) => console.log(error))
  };

  return (
      <div className='App list-group-item justify-content-center align-items-center mx-auto'
        style={{ "width": "400px", "backgroundColor": "white", "marginTop": "15px" }}>
        <h1 className='card text-white bg-primary mb-1' styleName='max-width: 20rem;'>Task Manager</h1>
        <h6 className='card text-white bg-primary mb-3' >FastAPI - React - MongoDB</h6>
        <div className='card-body'>
          <h5 className='card text-white bg-dark mb-3'>Add your task</h5>
          <span className='card-text'>
            <input className='mb-2 form-control titleIn' 
            onChange={event => setTitle(event.target.value)} placeholder='Title' />
            <input className='mb-2 form-control desIn'
              onChange={event => setDesc(event.target.value)} placeholder='Description' />
            <buttom className="btn btn-outline-primary mx-2 mb-2"
              style={{ 'borderRadius': '50px', 'font-weight': 'bold' }} onClick=
              {addTodoHandler}>Add task</buttom>
          </span>

          <h5 className='card text-white bg-dark mb-3'>Your tasks</h5>
          <div>
            <TodoView todoList={todoList} />
          </div>

        </div>
        <h6 className='card text-dark bg-warning py-1 mb-0'>Copyright 2023, All rights reserved &copy;</h6>
      </div>
  );
}

export default App;

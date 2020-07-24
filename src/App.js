import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import nextId from 'react-id-generator';  
import axios from 'axios'; 

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
      axios
        .get('http://127.0.0.1:8000/api/task-list/')
        .then(res => this.setState({ todos: res.data }));
    }

  // Toggle complete
  markComplete = (id, title, completed) => {
    this.setState({todos:this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed; 
        axios 
          .post (`http://127.0.0.1:8000/api/task-update/${id}/`, {
            title, 
            completed: !completed
          }) 
      }
      return todo;
    })})
  }

  // Delete Todo 
  deleteTodoItem = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/task-delete/${id}/`)
      .then (res => this.setState({todos: [...this.state.todos.filter(todo => todo.id != id
    )]})); 
    
  }

  //Add Todo
  addTodo = (title) => {
    axios
      .post ('http://127.0.0.1:8000/api/task-create/', {
        title,
        completed: false
    })
      .then (res => this.setState({todos: [...this.state.todos, res.data]}));
    
  }

  render(){
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodoItem={this.deleteTodoItem}/>
      </div>
    </div>
  );
}}

export default App;

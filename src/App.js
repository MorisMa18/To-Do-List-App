import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import nextId from 'react-id-generator';  
import axios from 'axios'; 

class App extends Component {
  state = {
    todos: [
      {
      id: nextId,
      title: 'Test Item',
      completed: false
      }
    ]
  }

  // Below JSON placeholder to imitate backend server
  // componentDidMount() {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //     .then(res => this.setState({ todos: res.data }));
  // }

  // Toggle complete
  markComplete = (id) => {
    this.setState({todos:this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed 
      }
      return todo;
    })})
  }

  // Delete Todo 
  deleteTodoItem = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id != id
    )]}); 
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: nextId(),
      title: title,
      completed: false,
    }
    this.setState({todos: [...this.state.todos, newTodo]});
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

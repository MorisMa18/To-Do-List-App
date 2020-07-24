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

  // constructor (props){
  //   super(props);
  //     this.state = {
  //       todo:[],
  //       activeItem:{
  //         id: null, 
  //         title: '', 
  //         completed: false,
  //       },
  //       editing: false, 
  //     }
  //     // Bind fetchTasks with this method
  //     this.fetchTasks = this.fetchTasks.bind(this)
  // };

  // componentWillMount(){
  //   this.fetchTasks()
  // }

  // fetchTasks(){
  //   console.log('Fetching...')
  // }

  componentDidMount() {
      axios
        .get('http://127.0.0.1:8000/api/task-list/')
        .then(res => this.setState({ todos: res.data }));
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
        todo.completed = !todo.completed; 
        axios 
          .put (`http://127.0.0.1:8000/api/task-update/${id}/`, 
          {data:
            todo.title: todo.tile,
            todo.completed: !todo.completed
          })
          .then (res => console.log(res.title))
      }
      // todos: [...this.state.todos, res.data]
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
    // const newTodo = {
    //   id: nextId(),
    //   title: title,
    //   completed: false,
    // }
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

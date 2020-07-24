import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'; 

class Todos extends Component {
  render(){
  return this.props.todos.map((todo) => (
      <div style={TodoItemContainerStyle}> 
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteTodoItem={this.props.deleteTodoItem}/>
      </div> 
      
  ));
}
}

const TodoItemContainerStyle = {
}

//PropType
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;

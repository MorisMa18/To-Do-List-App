import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import Checkbox from './CheckBox'

class TodoItem extends Component {
    getStyle = () =>{
        return {
            margin: "10px",
            backgroundColor: '#DFDADA',
            padding: '2px', 
            textAlign: 'center',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            color: this.props.todo.completed ? '#949BA0' : 'black',
            width: "100px,"

        }
    }

    render() { 
        const { id, title, completed } = this.props.todo; 
        return (
            <div style={this.getStyle()}>
                <p>
                    {/* <Checkbox completed onChange={this.props.markComplete.bind(this, id, title, completed)}/> */}
                    <input type="checkbox" autoComplete="off" onChange={this.props.markComplete.bind(this, id, title, completed)}/> {' '}
                    {title}
                    <button style={btnStyle} onClick={this.props.deleteTodoItem.bind(this, id)}>x</button>
                </p>
            </div>
        );
    }
}

//PropType
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#E81B1B',
    color: '#fff',
    border: 'none',
    padding: '3.5px 7px',
    borderRadius: '50%',
    cursor: 'pointer',
    margin: '5px 20px',
}
 
export default TodoItem;
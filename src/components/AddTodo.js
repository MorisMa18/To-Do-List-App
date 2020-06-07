import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit = (event) => {
        this.props.addTodo(this.state.title); 
        //Below line prevents JS to submit to the actual file
        event.preventDefault();
        //Below line reset the field to blank when submitted
        this.setState({title: ''});
    }

    render() { 
        return ( 
           <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
               <input
                    type="text"
                    name="title"
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add Todo..."
                    onChange = {this.onChange}
                />
               <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex:'1'}}
                />
           </form>
         );
    }
}
 
export default AddTodo; 
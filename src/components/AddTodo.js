import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class AddTodo extends Component {
    constructor(props){
        super (props)
        this.state ={
            title: ''
        }
        this.baseState = this.state
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit = (event) => {
        this.props.addTodo(this.state.title);

        //Below line prevents JS to submit to the actual file
        //Commented out because it prevents the field to reset title
        // event.preventDefault();

        //Below line reset the field to blank when submitted
        this.setState(this.baseState); 
        console.log ('reset'); 
    }

    render() { 
        return ( 
           <form onSubmit={this.onSubmit} style={headerStyle}>
               <input
                    type="text"
                    name="title"
                    style={{flex: '10', padding: '5px', alignItems: 'center'}}
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

const headerStyle = {
    display: 'flex', 
    width: '200px,',
    justifyContent:'center'

}
 
export default AddTodo; 
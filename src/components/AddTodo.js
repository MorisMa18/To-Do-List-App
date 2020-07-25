import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import TextField from '@material-ui/core/TextField'; 
import Button from '@material-ui/core/Button'; 
import { TextareaAutosize } from '@material-ui/core';

class AddTodo extends Component {
    constructor(props){
        super (props)
        this.state ={
            title: ''
        }
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
        // this.setState({title: ''});
    }

    render() { 
        return ( 
           <form onSubmit={this.onSubmit} style={headerStyle}>
               <TextField 
                    label="Add Todo..."
                    name = "title"
                    defaultValue = ''
                    onChange = {this.onChange}
                    style={{flex: '5', padding: '5px', alignItems: 'center'}}
                /> 
                <Button 
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{margin:'10px'}}
                >
                Submit
                </Button>  
           </form>
         );
    }
}

const headerStyle = {
   textAlign: 'center',
   marginTop: '4.5rem',
}
 
export default AddTodo; 
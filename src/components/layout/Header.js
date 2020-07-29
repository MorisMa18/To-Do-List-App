import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'; 
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types'; 


function Header () {
    return (
        <AppBar style={headerStyle}>
            <Toolbar>
                <IconButton edge="start"  color="inherit" aria-label="menu">
                    <MenuIcon style= {{marginRight: "10px"}}/> 
                </IconButton>
                <Typography variant="h4" >
                    📝 ToDoz
                </Typography>
                <IconButton edge="end"  color="inherit" aria-label="menu">
                    <Brightness4OutlinedIcon onClick={this.props.theme} 
                        // style= {{justifyContent: "right"}}
                    />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

const headerStyle ={
    textAlign: 'left',
}

// Header.propTypes = {
//     todo: PropTypes.object.isRequired
// }

export default Header; 
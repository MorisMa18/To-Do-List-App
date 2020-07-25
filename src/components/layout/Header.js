import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'; 
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';

function Header () {
    return (
        <AppBar style={headerStyle}>
            <Toolbar>
                <Typography variant="h4" >
                    📝 ToDoz
                </Typography>
                <IconButton edge="end"  color="inherit" aria-label="menu">
                    <Brightness4OutlinedIcon
                        style= {{textAlign: "end"}}
                    />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

const headerStyle ={
    textAlign: 'left',
}

export default Header; 
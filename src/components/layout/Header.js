import React, { Component } from 'react';

function Header () {
    return (
        <header style={headerStyle}>
            <h1> 
                ToDoz
            </h1>
        </header>
    )
}

const headerStyle ={
    background: '#2E98E1', 
    color: '#fff',
    textAlign: 'left',
    padding: '10px'
}

export default Header; 
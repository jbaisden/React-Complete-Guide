import React from 'react';

const styling = {
    display:'inline-block',
    padding:'16px',
    textAlign:'center',
    margin:'16px',
    border:'1px solid black'
};

const CharComponent = (props) => {
    return (
               <span onClick={props.click} style={styling}>{props.Character}</span>
    )
};

export default CharComponent;
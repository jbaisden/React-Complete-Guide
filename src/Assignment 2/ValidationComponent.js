import React from 'react';



const ValidationComponent = (props) => {

    let validationMessage = 'Text long enough';
    
    if(props.InputLength <= 5 ) {
        validationMessage = 'Text too short';
    }
        
    return (
        <div>
            {/* { 
                props.InputLength < 5 ?
                <strong>LENGTH TOO SHORT</strong>
                : <strong>LENGTH IS GOOD </strong>
            } */}
            <p>{validationMessage}</p>
        </div>
    )
};

export default ValidationComponent;
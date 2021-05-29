import React from 'react';

const Contact = (props) => {
    return (
        <div>
            <h1 onClick={props.clickMe}>Contact</h1>
            {console.log(props.color)}
        </div>
    );
};

export default Contact;
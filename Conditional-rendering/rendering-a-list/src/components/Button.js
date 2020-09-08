import React from 'react';


const Button = ({ name, clicked }) => (
        <button onClick={ clicked }>
            { name }
            </button>
)

export default Button

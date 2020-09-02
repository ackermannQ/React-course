import React from 'react';

const Membre = ({name, surname, age}) => {
    return (
        <h3>Membre : {name} {surname}, {age} y.o</h3>
    )
}

export default Membre;
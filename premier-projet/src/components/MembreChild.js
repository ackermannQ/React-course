import React, { Fragment } from 'react';

const MembreChild = ({name, surname, children}) => {
    return (
        <Fragment>
            <h3>Membre : {name} {surname}</h3>
            <p>{children}</p>
        </Fragment>
    )
}

export default MembreChild;
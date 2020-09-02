import React, { Fragment } from 'react';

const MembreChild = ({name, surname, children}) => {
    return (
        <Fragment>
            <h3>Membre : {name} {surname}</h3>
            {children ? <p>{children}</p> : <Fragment/>}
        </Fragment>
    )
}

export default MembreChild;
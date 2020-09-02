import React, { Fragment } from 'react';

const MembreChild = ({name, surname, children, age}) => {
    return (
        <Fragment>
            <h3>Membre : {name} {surname}, {age} years of boink</h3>
            {children ? <p>{children}</p> : <Fragment/>}
        </Fragment>
    )
}

export default MembreChild;
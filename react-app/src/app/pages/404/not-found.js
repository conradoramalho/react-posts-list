import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'material-ui';

const NotFound = () => {
    return (
        <Fragment>
            <Link to="/">
                <Button color="primary">
                    Go to dashboard
                </Button>
            </Link>
            <div>
                <h1>
                    Página não encontrada.
                </h1>
                <h2>
                    Tente novamente
                </h2>
            </div>
        </Fragment>
    )
}

export default NotFound;
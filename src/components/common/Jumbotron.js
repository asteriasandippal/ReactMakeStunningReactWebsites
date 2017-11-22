import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';

function Jumbotron(props) {
    const className = `jumbotron ${props.containerfluid === 'true' ? 'jumbotron-fluid' : ''} ${props.className}`;
    return (
        <div {...props}
            className={className}>
            <Container fluid={props.containerfluid} className="header-container">
                {props.children}
            </Container>
        </div>
    );
}

Jumbotron.defaultProps = {
    className: '',
    containerfluid: ''
};

Jumbotron.proTypes = {
    className: PropTypes.string,
    containerfluid: PropTypes.bool
};

export default Jumbotron;

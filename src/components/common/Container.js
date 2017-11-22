import React from 'react';
import PropTypes from 'prop-types';

function Container(props) {
    const className = 'container'+ (props.fluid === 'true' ? '-fluid' : '') + ' ' + (props.className || '');
    return (
        <div {...props} className={className}>
            {props.children}
        </div>
    );
}

Container.defaultProps = {
    fluid: '',
    className: '',
    children: ''
};

Container.propTypes = {
    fluid: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.any
};

export default Container;

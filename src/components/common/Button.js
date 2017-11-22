import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    const Tag = props.href ? 'a' : 'button';
    const className = 'btn ' + props.className + (props.disabled ? ' disabled' : '');
    return (
        <Tag {...props} className={className}>{props.children}</Tag>
    );
}

Button.defaultProps = {
    className: '',
    children: '',
    href: '',
    disabled: ''
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    href: PropTypes.string,
    disabled: PropTypes.any
};

export default Button;

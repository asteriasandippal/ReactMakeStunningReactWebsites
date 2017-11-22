import React from 'react';

function Button(props) {
    const Tag = props.href ? 'a' : 'Button';
    const className = 'btn ' + props.className + (props.disabled ? ' disabled' : '');

    return (
        <Tag {...props} className={className}>Hello, I am Button</Tag>
    );
}

export default Button;

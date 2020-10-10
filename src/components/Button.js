import React from 'react'

function Button (props) {
    return (
        <button type={props.type} >{props.children}</button>
    )
}

Button.defaultProps = {
    type: 'Button'
}

export default Button
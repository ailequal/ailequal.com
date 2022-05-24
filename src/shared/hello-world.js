import * as React from 'react'

const HelloWorld = ({name = "user"}) => {
    return (
        <h3>Hello world {name}!!</h3>
    )
}

export default HelloWorld

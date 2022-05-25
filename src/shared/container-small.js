import * as React from 'react'

const ContainerSmall = ({children}) => {
    return (
        <div className="max-w-4xl w-full sm:w-4/6 mx-auto px-2 sm:px-6 lg:px-8">
            {children}
        </div>
    )
}

export default ContainerSmall

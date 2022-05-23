import * as React from 'react'

const handleClick = (candidate) => console.log(candidate)

const Number = ({candidate}) => {
    return (
        <button
            className="mx-1 cursor-pointer text-gray-700 hover:text-white text-xs"
            type="button"
            onClick={() => handleClick(candidate)}
        >
            {candidate.number}
        </button>
    )
}

export default Number

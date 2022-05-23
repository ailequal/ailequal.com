import * as React from 'react'
import Number from "./number";

const candidates = [
    {number: 4, candidate: "John Locke"},
    {number: 8, candidate: "Hugo Reyes"},
    {number: 15, candidate: "James Ford"},
    {number: 16, candidate: "Sayid Jarrah"},
    {number: 23, candidate: "Jack Shephard"},
    {number: 42, candidate: "Jin-Soo Kwon"}
]

const Numbers = () => {
    return (
        <div>
            {candidates.map(element => {
                return <Number key={element.number} candidate={element}></Number>
            })}
        </div>
    )
}

export default Numbers

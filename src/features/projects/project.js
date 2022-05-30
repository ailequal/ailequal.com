import * as React from "react"

const Project = ({data}) => {
    return (
        <a href={data.href}>
            <div
                className="sm:h-full border-2 border-gray-800 rounded-lg hover:bg-gray-800 hover:text-white p-4">
                <h3 className="mb-4 text-center text-2xl font-bold">{data.title}</h3>
                <p className="text-justify text-lg">{data.content}</p>
            </div>
        </a>
    )
}

export default Project

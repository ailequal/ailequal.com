import * as React from "react"
import Project from "./project";

const Projects = ({data}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            {data.map((element, index) => {
                return (
                    <Project key={index} data={element}></Project>
                )
            })}
        </div>
    )
}

export default Projects

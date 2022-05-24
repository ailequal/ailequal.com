import * as React from "react"
import ContainerSmall from "../shared/container-small";
import Header from "../features/projects/header";
import Layout from "../shared/layout";
import Project from "../features/projects/project";

const projects = [
    {
        title: "Portfolio",
        content: `
            My portfolio website built with Gatsby and Tailwind CSS
            (it's driven by React under the hood).
            It's the one you are browsing right now!
        `,
        href: "https://github.com/ailequal/ailequal.com"
    },
    {
        title: "ng-fintech",
        content: `
             A fintech prototype web application written with Angular.
             Most of the functionality available in Angular have been used.
             The UI has been created with the help of Angular Material.
        `,
        href: "https://github.com/ailequal/ng-fintech"
    },
    {
        title: "Witte",
        content: `
             What is there to eat?
             A WordPress plugin that leverages the CMS features in order to organize courses and meals across the whole week.
             In this way, anyone can easily create a dynamic Menu for restaurants and hotels.
             Each course support multiple languages and a thumbnail. Written with PHP.
        `,
        href: "https://github.com/ailequal/witte"
    },
    {
        title: "boolbnb",
        content: `
             A little replica of Airbnb. This is a group project, where I coordinated myself with other three people remotely.
             It's written with Laravel. We handled the creation of both the frontend and the backend of the application.
        `,
        href: "https://github.com/ailequal/boolbnb"
    },
]

const ProjectsPage = () => {
    return (
        <Layout pageTitle='Projects'>
            <Header></Header>

            <div>
                {/* Projects. */}
                <ContainerSmall>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                        {projects.map((element, index) => {
                            return (
                                <Project key={index} data={element}></Project>
                            )
                        })}
                    </div>
                </ContainerSmall>
            </div>
        </Layout>
    )
}

export default ProjectsPage

import * as React from "react"
import Layout from "../shared/layout";
import ProjectsDisclosures from "../features/projects/projects-disclosures";

const ProjectsPage = () => {
    return (
        <Layout pageTitle='Projects'>
            <h1>Projects Header</h1>

            <div>
                <p>
                    So many projects!!
                </p>
            </div>

            <ProjectsDisclosures></ProjectsDisclosures>
        </Layout>
    )
}

export default ProjectsPage

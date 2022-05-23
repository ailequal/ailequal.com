import * as React from "react"
import Layout from "../components/layout";
import ProjectsDisclosures from "../components/projects-disclosures";

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

import * as React from "react"
import Layout from "../components/layout";
import ProjectsDisclosures from "../components/projects-disclosures";

const ProjectsPage = () => {
    return (
        <Layout pageTitle='Projects'>
            <p>
                So many projects!!
            </p>

            <ProjectsDisclosures></ProjectsDisclosures>
        </Layout>
    )
}

export default ProjectsPage

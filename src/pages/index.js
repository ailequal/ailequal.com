import * as React from "react"
import CallToAction from "../features/home/call-to-action";
import ContactMe from "../features/home/contact-me";
import Header from "../features/home/header";
import Introduction from "../features/home/introduction";
import Layout from "../shared/layout";
import Skills from "../features/home/skills";

// TODO: All the data across the whole project should be queried with GraphQL (not hard-coded).
// TODO: Refactor some components.
// TODO: Clean up and refactor the styling of the website.
// TODO: Rewrite the project with TypeScript.
// TODO: Create a proper 404 page that supports Netlify.

const IndexPage = () => {
    return (
        <Layout pageTitle='Home'>
            <Header></Header>

            <div>
                <Introduction></Introduction>

                <Skills></Skills>

                <CallToAction></CallToAction>

                <ContactMe></ContactMe>
            </div>
        </Layout>
    )
}

export default IndexPage

import * as React from "react"
import CallToAction from "../features/home/call-to-action";
import ContactMe from "../features/home/contact-me";
import Header from "../features/home/header";
import Introduction from "../features/home/introduction";
import Layout from "../shared/layout";
import Skills from "../features/home/skills";

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

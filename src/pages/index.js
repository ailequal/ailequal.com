import * as React from "react"
import Layout from "../components/layout";
import Container from "../components/container";
import LoremIpsum from "../components/lorem-ipsum";

const IndexPage = () => {
    return (
        <Layout pageTitle='Home'>
            <Container>
                <div className="py-3">
                <LoremIpsum></LoremIpsum>
                <LoremIpsum></LoremIpsum>
                <LoremIpsum></LoremIpsum>
                </div>
            </Container>
        </Layout>
    )
}

export default IndexPage

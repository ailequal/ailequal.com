import * as React from "react"
import Layout from "../components/layout";
import Container from "../components/container";
import LoremIpsum from "../components/lorem-ipsum";

const IndexPage = () => {
    return (
        <Layout pageTitle='Home'>
            <h1>Home Header</h1>

            <div>
                <div className="py-3">
                    <Container><LoremIpsum></LoremIpsum></Container>
                    <LoremIpsum></LoremIpsum>
                    <Container><LoremIpsum></LoremIpsum></Container>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage

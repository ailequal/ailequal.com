import * as React from "react"
import Layout from "../shared/layout";
import Container from "../shared/container";
import LoremIpsum from "../shared/lorem-ipsum";

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

import * as React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout";
import Tap from "../components/tap";

// Standard page query.
export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`

const DummyPage = ({data}) => {
    return (
        <Layout pageTitle='Dummy'>
            <h1>Dummy Header</h1>

            <div>
                <h2>Standard page query: {data.site.siteMetadata.title}</h2>

                <Tap></Tap>
            </div>
        </Layout>
    )
}

export default DummyPage

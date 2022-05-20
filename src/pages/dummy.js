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
            <h2>Standard page query: {data.site.siteMetadata.title}</h2>

            <Tap></Tap>
        </Layout>
    )
}

export default DummyPage

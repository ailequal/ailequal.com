import * as React from 'react'
import {graphql, useStaticQuery} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

const Tap = () => {
    // Static component query.
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    description
                }
            }
        }
    `)

    return (
        <div>
            <h2>Static component query: {data.site.siteMetadata.description}</h2>

            <div>
                <h3>Static images:</h3>
                <StaticImage
                    alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                    src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
                />
                <StaticImage
                    alt="ailequal"
                    src="../images/ailequal.png"
                />
            </div>
        </div>
    )
}

export default Tap

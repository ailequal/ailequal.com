import * as React from 'react'
import {Helmet} from "react-helmet";
import {graphql, useStaticQuery} from "gatsby";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{pageTitle} - {data.site.siteMetadata.title}</title>
            </Helmet>

            <Navbar></Navbar>

            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>

            <Footer></Footer>
        </div>
    )
}

export default Layout

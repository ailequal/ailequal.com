import * as React from 'react'
import {Helmet} from "react-helmet";
import {graphql, useStaticQuery} from "gatsby";
import Navbar from "./navbar";
import Footer from "./footer";
import Header from "./header";

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
        <div className="flex flex-col h-screen justify-between">
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{pageTitle} - {data.site.siteMetadata.title}</title>
            </Helmet>

            <Navbar></Navbar>

            <Header>
                {children[0]}
            </Header>

            <main>
                {children[1]}
            </main>

            <Footer></Footer>
        </div>
    )
}

export default Layout

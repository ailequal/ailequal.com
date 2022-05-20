import * as React from 'react'
import {Helmet} from "react-helmet";
import Navbar from "./navbar";

const Layout = ({pageTitle, children}) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{pageTitle}</title>
            </Helmet>

            <Navbar></Navbar>

            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout

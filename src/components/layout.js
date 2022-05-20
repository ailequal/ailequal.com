import * as React from 'react'
import {Helmet} from "react-helmet";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({pageTitle, children}) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{pageTitle} - ailequal</title>
            </Helmet>

            <Navbar></Navbar>

            <br/>

            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>

            <Footer></Footer>
        </div>
    )
}

export default Layout

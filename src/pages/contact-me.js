import * as React from "react"
import Header from "../features/contact-me/header";
import Layout from "../shared/layout";

const ContactMePage = () => {
    return (
        <Layout pageTitle='Contact me'>
            <Header></Header>

            <div>
                {/* Contact me. */}
                <p>
                    I'll be there in a moment.
                </p>
            </div>
        </Layout>
    )
}

export default ContactMePage

import * as React from "react"
import Header from "../features/contact-me/header";
import Layout from "../shared/layout";
import Form from "../features/contact-me/form";
import ContainerSmall from "../shared/container-small";

const ContactMePage = () => {
    return (
        <Layout pageTitle='Contact me'>
            <Header></Header>

            <div>
                <ContainerSmall>
                    <div className="my-4">
                        <Form></Form>
                    </div>
                </ContainerSmall>
            </div>
        </Layout>
    )
}

export default ContactMePage

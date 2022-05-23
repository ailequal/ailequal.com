import * as React from "react"
import Layout from "../shared/layout";
import Container from "../shared/container";
import Header from "../features/home/header";
import LoremIpsum from "../shared/lorem-ipsum";
import Skills from "../features/home/skills";

const IndexPage = () => {
    return (
        <Layout pageTitle='Home'>
            <Header></Header>

            <div className="min-h-screen">
                <div className="mx-auto my-3 w-full sm:w-5/6 text-justify text-xl">
                    <Container>
                        <h3 className="my-4 text-center">Hello world!! My name is Elia, I am a Web Developer based in
                            Italy.</h3>

                        <div className="my-4">
                            <p>Skills will go here somehow!!! Tab: human vs coder skills.</p>
                            <p>Each tab will have disclosure with stuff inside?!!</p>
                            <Skills></Skills>
                        </div>

                        <LoremIpsum></LoremIpsum>
                    </Container>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage

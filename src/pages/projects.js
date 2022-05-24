import * as React from "react"
import Layout from "../shared/layout";
import Header from "../features/projects/header";
import ContainerSmall from "../shared/container-small";
import LoremIpsum from "../shared/lorem-ipsum";

const ProjectsPage = () => {
    return (
        <Layout pageTitle='Projects'>
            <Header></Header>

            <div>
                {/* Projects. */}
                <div className="bg-gray-800">
                    <ContainerSmall>
                        <div className="py-3 text-justify text-xl text-white">
                            <h3 className="mb-4 text-center">
                                Hello world!! My name is Elia, I am a Web Developer based in Italy.
                            </h3>

                            <LoremIpsum></LoremIpsum>
                        </div>
                    </ContainerSmall>
                </div>
            </div>
        </Layout>
    )
}

export default ProjectsPage

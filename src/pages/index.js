import * as React from "react"
import Layout from "../shared/layout";
import Header from "../features/home/header";
import LoremIpsum from "../shared/lorem-ipsum";
import Tabs from "../shared/tabs";
import Accordions from "../shared/accordions";
import ContainerSmall from "../shared/container-small";
import {Link} from "gatsby";

const humanData = [
    {title: 'aaa', content: 'bbb'},
    {title: 'ccc', content: 'ddd'},
    {title: 'eee', content: 'fff'}
]

const coderData = [
    {title: '123', content: 'aaa'},
    {title: '456', content: 'bbb'},
    {title: '789', content: 'ccc'}
]

const tabsData = [
    {title: "Human skills", content: <Accordions data={humanData}></Accordions>},
    {title: "Coder skills", content: <Accordions data={coderData}></Accordions>},
]

const IndexPage = () => {
    return (
        <Layout pageTitle='Home'>
            <Header></Header>

            <div>
                {/* Introduction. */}
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

                {/* Skills. */}
                <div className="my-8">
                    <ContainerSmall>
                        <Tabs data={tabsData}></Tabs>
                    </ContainerSmall>
                </div>

                {/* Call to action. */}
                <div className="bg-gray-800">
                    <ContainerSmall>
                        <div className="py-4 text-xl text-white">
                            <h3 className="mb-4 text-center">Do you want to know more?</h3>

                            <div className="flex justify-around items-center">
                                <Link
                                    to="/projects"
                                    className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Projects
                                </Link>

                                <a
                                    href="https://www.rainypast.com"
                                    className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Blog (WIP)
                                </a>
                            </div>
                        </div>
                    </ContainerSmall>
                </div>

                {/* Contact me. */}
                <div className="my-4">
                    <ContainerSmall>
                        <div className="py-2 text-xl">
                            <h3 className="mb-4 text-center">Are you ready?</h3>

                            <div className="flex justify-around items-center">
                                <Link
                                    to="/contact-me"
                                    className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Contact me
                                </Link>
                            </div>
                        </div>
                    </ContainerSmall>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage

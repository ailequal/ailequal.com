import * as React from "react"
import Layout from "../shared/layout";
import Header from "../features/home/header";
import LoremIpsum from "../shared/lorem-ipsum";
import Tabs from "../shared/tabs";
import Accordions from "../shared/accordions";
import ContainerSmall from "../shared/container-small";

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
    {title: "Human", content: <Accordions data={humanData}></Accordions>},
    {title: "Coder", content: <Accordions data={coderData}></Accordions>},
]

const IndexPage = () => {
    return (
        <Layout pageTitle='Home'>
            <Header></Header>

            <div>
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

                <div className="my-8">
                    <ContainerSmall>
                        <Tabs data={tabsData}></Tabs>
                    </ContainerSmall>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage

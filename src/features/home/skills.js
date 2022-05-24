import * as React from 'react'
import ContainerSmall from "../../shared/container-small";
import Tabs from "../../shared/tabs";
import Accordions from "../../shared/accordions";

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

const Skills = () => {
    return (
        <div className="my-8">
            <ContainerSmall>
                <Tabs data={tabsData}></Tabs>
            </ContainerSmall>
        </div>
    )
}

export default Skills

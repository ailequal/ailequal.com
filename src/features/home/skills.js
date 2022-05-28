import * as React from 'react'
import ContainerSmall from "../../shared/container-small";
import Tabs from "../../shared/tabs";
import Accordions from "../../shared/accordions";

const softData = [
    {title: 'Patience', content: 'I face the difficulties with firmness and determination.'},
    {title: 'Curiosity', content: 'I delve with enthusiasm into things that catch my attention.'},
    {title: 'Support', content: 'I am ready to lend my knowledge and experience to anyone.'}
]

const hardData = [
    {title: 'Programming languages', content: 'Bash | JavaScript | TypeScript | PHP'},
    {title: 'Frameworks', content: 'Angular | React | Gatsby | jQuery | WordPress | Laravel'},
    {title: 'Tools', content: 'Git | Docker | Devilbox | Linux | Nginx | Redis | phpMyAdmin'},
    {title: 'Libraries', content: 'Angular Material | Bootstrap | TailwindCSS | RxJS | Carbon Fields | CMB2'}
]

const tabsData = [
    {title: "Soft skills", content: <Accordions data={softData}></Accordions>},
    {title: "Hard skills", content: <Accordions data={hardData}></Accordions>},
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

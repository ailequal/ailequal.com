import * as React from 'react'
import ContainerSmall from "../../shared/container-small";
import LoremIpsum from "../../shared/lorem-ipsum";

const Introduction = () => {
    return (
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
    )
}

export default Introduction

import * as React from 'react'
import ContainerSmall from "../../shared/container-small";

const Introduction = () => {
    return (
        <div className="bg-gray-800">
            <ContainerSmall>
                <div className="py-3 text-justify text-xl text-white">
                    <h3 className="mb-4 text-center">
                        Hello world. My name is Elia, I am a Web Developer based in Italy.
                    </h3>

                    <p>I’m a computer geek by nature. I have always been in love with the information technology and the
                        English language: I found out that programming is the perfect mix between these two.</p>
                </div>
            </ContainerSmall>
        </div>
    )
}

export default Introduction

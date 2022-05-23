import * as React from 'react'
import Container from "../../shared/container";
import {StaticImage} from "gatsby-plugin-image";

const Header = () => {
    return (
        <div className="border-2 border-blue-400">
            <Container>
                <div className="flex flex-col justify-center items-center gap-2 my-10">
                    <StaticImage
                        className="h-40 w-40 rounded-full"
                        alt="ailequal"
                        src="../images/ailequal.png"
                    />

                    <div className="flex flex-col justify-center items-center basis-2/3 sm:max-w-md w-5/6 sm:w-4/6">
                        <div className="my-3.5">
                            <h1 className="text-6xl">ailequal</h1>
                        </div>

                        <div className="flex justify-between items-baseline w-full my-2">
                            <span className="text-xl">alias for </span>
                            <h2 className="inline-block text-4xl">Elia Pari</h2>
                        </div>

                        <div className="flex justify-between items-baseline w-full  my-2">
                            <span className="text-xl">I am a </span>
                            <h3 className="text-2xl">Web Developer</h3>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header

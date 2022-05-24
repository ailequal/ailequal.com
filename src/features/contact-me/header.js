import * as React from "react"
import Container from "../../shared/container";

const Header = () => {
    return (
        <div>
            <Container>
                <div className="flex flex-col justify-center items-center gap-2 my-10">
                    <h1 className="mb-4 text-center text-6xl">Contact me</h1>
                    <h2 className="text-center text-4xl">
                        Submit the form below or add me on&nbsp;
                        <a className="underline" href="https://www.linkedin.com/in/eliapari93">LinkedIn</a>
                    </h2>
                </div>
            </Container>
        </div>)
}

export default Header

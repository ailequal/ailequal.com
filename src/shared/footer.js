import * as React from 'react'
import Container from "./container";
import Twitter from "./icons/Twitter";
import LinkedIn from "./icons/linkedin";
import YouTube from "./icons/youtube";
import Numbers from "./numbers";

const Footer = () => {
    return (
        <footer className="bg-gray-800">
            <Container>
                <div className="flex justify-between items-center py-4 text-white">
                    <div></div>

                    <div className="basis-3/5 flex justify-between items-center gap-4">
                        <LinkedIn href="https://www.linkedin.com/in/eliapari93/"></LinkedIn>
                        <Twitter href="https://twitter.com/eliapari93"></Twitter>
                        <YouTube href="https://www.youtube.com/c/EliaPari"></YouTube>
                    </div>

                    <div>
                        <Numbers></Numbers>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer

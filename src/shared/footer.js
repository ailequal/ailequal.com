import * as React from 'react'
import Container from "./container";
import Twitter from "./icons/Twitter";
import LinkedIn from "./icons/linkedin";
import YouTube from "./icons/youtube";
import Numbers from "./numbers";
import GitHub from "./icons/github";

const Footer = () => {
    return (
        <footer className="bg-gray-800">
            <Container>
                <div className="flex justify-between items-center py-4 text-white">
                    <div className="basis-3/5 flex justify-between items-center gap-4">
                        <GitHub href="https://github.com/ailequal"></GitHub>
                        <LinkedIn href="https://www.linkedin.com/in/eliapari93"></LinkedIn>
                        <Twitter href="https://twitter.com/eliapari93"></Twitter>
                        <YouTube href="https://www.youtube.com/c/EliaPari"></YouTube>
                    </div>

                    <Numbers></Numbers>
                </div>
            </Container>
        </footer>
    )
}

export default Footer

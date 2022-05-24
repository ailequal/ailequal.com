import * as React from 'react'
import ContainerSmall from "../../shared/container-small";
import {Link} from "gatsby";

const CallToAction = () => {
    return (
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
    )
}

export default CallToAction

import * as React from 'react'
import ContainerSmall from "../../shared/container-small";

const CallToAction = () => {
    return (
        <div className="my-4">
            <ContainerSmall>
                <div className="py-2 text-xl">
                    <h3 className="mb-4 text-center">Still looking for more?</h3>

                    <div className="flex justify-around items-center">
                        <a
                            href="https://github.com/ailequal"
                            className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </ContainerSmall>
        </div>
    )
}

export default CallToAction

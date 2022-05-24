import * as React from 'react'
import ContainerSmall from "../../shared/container-small";
import {Link} from "gatsby";

const ContactMe = () => {
    return (
        <div className="my-4">
            <ContainerSmall>
                <div className="py-2 text-xl">
                    <h3 className="mb-4 text-center">Are you ready?</h3>

                    <div className="flex justify-around items-center">
                        <Link
                            to="/contact-me"
                            className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Contact me
                        </Link>
                    </div>
                </div>
            </ContainerSmall>
        </div>
    )
}

export default ContactMe

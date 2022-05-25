import * as React from "react"

const Form = () => {
    return (<div className="mt-10 sm:mt-0">
        <div className="mt-5 md:mt-0 md:col-span-2">

            <form action="#" method="POST">
                <div className="overflow-hidden sm:rounded-md">

                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">

                            <div className="col-span-12">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="mt-1 focus:ring-gray-800 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            <div className="col-span-12">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="mt-1 focus:ring-gray-800 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            <div className="col-span-12">
                                <label htmlFor="email-address"
                                       className="block text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    name="email-address"
                                    id="email-address"
                                    autoComplete="email"
                                    className="mt-1 focus:ring-gray-800 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            <div className="col-span-12">
                                <label htmlFor="message" className="block text-sm font-medium">
                                    Message
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={3}
                                        className="shadow-sm focus:ring-gray-800 focus:border-gray-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="px-4 py-3 text-right sm:px-6">
                        <button
                            type="submit"
                            className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Submit
                        </button>
                    </div>

                </div>
            </form>

        </div>
    </div>)
}

export default Form

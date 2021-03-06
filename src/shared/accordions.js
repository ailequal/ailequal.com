import * as React from 'react'
import {Disclosure} from '@headlessui/react'
import {ChevronUpIcon} from '@heroicons/react/solid'

const Accordions = ({data}) => {
    return (
        <div className="w-full">
            <div className="mx-auto w-full rounded-2xl bg-white">

                {data.map((element, index) => {
                    return (
                        <Disclosure key={index} as="div" className="mt-2">
                            {({open}) => (
                                <>
                                    <Disclosure.Button
                                        className="flex w-full justify-between rounded-lg bg-gray-800 px-4 py-2 text-left text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                                        <span>{element.title}</span>
                                        <ChevronUpIcon
                                            className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-gray-500`}
                                        />
                                    </Disclosure.Button>

                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                        {element.content}
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    )
                })}

            </div>
        </div>
    )
}

export default Accordions

import * as React from 'react'
import {Tab} from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Tabs = ({data}) => {
    return (
        <div className="w-full m-auto">
            <Tab.Group>

                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20">
                    {data.map((element, index) => (
                        <Tab
                            key={index}
                            className={({selected}) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-white/[0.80] hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            {element.title}
                        </Tab>
                    ))}
                </Tab.List>

                <Tab.Panels className="mt-2">
                    {data.map((element, index) => (
                        <Tab.Panel
                            key={index}
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}
                        >
                            {element.content}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>

            </Tab.Group>
        </div>
    )
}

export default Tabs

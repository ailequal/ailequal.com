import * as React from 'react'
import {Disclosure} from '@headlessui/react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import Container from "./container";

const navigation = [
    {name: 'Home', href: '/', internal: true},
    {name: 'Projects', href: '/projects', internal: true},
    {name: 'Blog (WIP)', href: 'https://www.rainypast.com', internal: false},
    {name: 'Contact me', href: '/contact-me', internal: true}
]

const Navbar = () => {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({open}) => (
                <>
                    <Container>
                        <div className="relative flex items-center justify-between h-16">

                            {/* Left: navigation. */}
                            <div
                                className="inset-y-0 left-0 flex justify-between items-center pr-2 sm:static sm:inset-auto sm:pr-0 sm:w-full">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link to="/">
                                        <StaticImage
                                            className="h-10 w-10 rounded-full"
                                            alt="ailequal"
                                            src="../images/ailequal.png"
                                        />
                                    </Link>
                                </div>

                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => {
                                            if (item.internal) {
                                                return (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href}
                                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                                        activeClassName="bg-gray-900 text-white"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                )
                                            }

                                            return (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                                    rel="external"
                                                >
                                                    {item.name}
                                                </a>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Center: empty. */}
                            <div
                                className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start hidden">
                            </div>

                            {/* Right: mobile menu button. */}
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>

                        </div>
                    </Container>

                    {/* Mobile: hamburger menu. */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => {
                                if (item.internal) {
                                    return (
                                        <Disclosure.Button
                                            key={item.name}
                                            as={Link}
                                            to={item.href}
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                            activeClassName="bg-gray-900 text-white"
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    )
                                }

                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                        rel="external"
                                    >
                                        {item.name}
                                    </a>
                                )
                            })}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Navbar

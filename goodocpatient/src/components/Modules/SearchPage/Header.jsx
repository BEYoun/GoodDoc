import React, {Fragment} from 'react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Popover, Transition } from '@headlessui/react'
import { LogoLight } from '../../Elements/Logo'
import { Link } from 'react-router-dom'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Header = () => {
    return (
        <Popover className="relative">
                {({ open }) => (
                    <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="flex justify-between items-center border-b border-white border-opacity-60 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link to="/">
                                <LogoLight />
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-indigo-900 rounded-md p-2 inline-flex items-center justify-center text-indigo-300 hover:text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden md:flex space-x-10">
                            <Popover className="relative">
                            {({ open }) => (
                                <>
                                <Popover.Button
                                    className={classNames(
                                    open ? 'text-white' : 'text-indigo-300',
                                    'group bg-indigo-900 rounded-md inline-flex items-center text-base font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-900 focus:ring-white'
                                    )}
                                >
                                    <span>Solutions</span>
                                    <ChevronDownIcon
                                    className={classNames(
                                        open ? 'text-white' : 'text-indigo-300',
                                        'ml-2 h-5 w-5 group-hover:text-white'
                                    )}
                                    aria-hidden="true"
                                    />
                                </Popover.Button>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel
                                    static
                                    className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md px-2 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                    >
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="relative bg-white py-6 px-5 grid gap-6 sm:gap-8 sm:p-8">
                                        {solutions.map((item) => (
                                            <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50"
                                            >
                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                            <div className="ml-4">
                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                            </div>
                                            </a>
                                        ))}
                                        </div>
                                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                        {callsToAction.map((item) => (
                                            <div key={item.name} className="flow-root">
                                            <a
                                                href={item.href}
                                                className="-m-3 rounded-md p-3 flex items-center text-base font-medium text-gray-900 hover:bg-gray-100"
                                            >
                                                <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                                <span className="ml-3">{item.name}</span>
                                            </a>
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                    </Popover.Panel>
                                </Transition>
                                </>
                            )}
                            </Popover>


                        </Popover.Group>
                        <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
                            <a href="#" className="whitespace-nowrap text-base font-medium  text-white hover:text-accent">
                            Se connecter
                            </a>
                            <a
                            href="#"
                            className="whitespace-nowrap bg-white border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex items-center justify-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                            >
                            S'enregister
                            </a>
                        </div>
                        </div>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                        focus
                        static
                        className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                        <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y-2 divide-white">
                            <div className="pt-5 pb-6 px-5 space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark-orange-400-to-pink-500-gradient.svg"
                                    alt="Workflow"
                                />
                                </div>
                                <div className="-mr-2">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                {solutions.map((item) => (
                                    <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                    >
                                    <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                    <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                    </a>
                                ))}
                                </nav>
                            </div>
                            </div>
                            <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">

                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                Blog
                                </a>

                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                Contact Sales
                                </a>
                                {resources.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    {item.name}
                                </a>
                                ))}
                            </div>
                            <div>
                                <a
                                href="#"
                                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                S'enregister
                                </a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                Existing customer?
                                <a href="#" className="hover:text-indigo-500">
                                    Se connecter
                                </a>
                                </p>
                            </div>
                            </div>
                        </div>
                        </Popover.Panel>
                    </Transition>
                    </>
                )}
                </Popover>

    )
}

export default Header

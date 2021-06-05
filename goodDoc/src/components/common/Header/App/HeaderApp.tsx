import React, { useState, Fragment } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  CalendarIcon,
  HomeIcon,
  MenuAlt2Icon,
  PlusIcon as PlusIconOutline,
  UserGroupIcon,
  XIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useLogoutMutation } from '../../../../graphql/generated/graphql'
import { clearSession, ISession } from '../../../../store/ducks/session'
import { Link } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const HeaderApp: React.FC = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()
  const [logout] = useLogoutMutation()
  let navigation: {
    name: string
    href: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any
    current: boolean
  }[] = []
  const role = useSelector(
    (state: { session: ISession }) => state.session?.role
  )
  if (role === 'admin') {
    navigation = [
      { name: 'Home', href: '', icon: HomeIcon, current: false },
      {
        name: 'Clients',
        href: 'clients',
        icon: UserGroupIcon,
        current: false,
      },
    ]
  }
  if (role === 'doctor') {
    navigation = [
      { name: 'Home', href: '', icon: HomeIcon, current: false },
      {
        name: 'Patients',
        href: 'patients',
        icon: UserGroupIcon,
        current: false,
      },
      {
        name: 'Calendrier',
        href: 'calendrier',
        icon: CalendarIcon,
        current: false,
      },
    ]
  }
  if (role === 'assistant') {
    navigation = [{ name: 'Home', href: '', icon: HomeIcon, current: false }]
  }
  return (
    <>
      {/* Narrow sidebar */}
      <div className="hidden w-24 bg-blue-700 overflow-y-auto md:block">
        <div className="w-full py-6 flex flex-col items-center">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
              alt="Workflow"
            />
          </div>
          <div className="flex-1 mt-6 w-full px-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={'/application/' + role + '/' + item.href}
                className={classNames(
                  item.current
                    ? 'bg-blue-800 text-white'
                    : 'text-blue-100 hover:bg-blue-800 hover:text-white',
                  'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? 'text-white'
                      : 'text-blue-300 group-hover:text-white',
                    'h-6 w-6'
                  )}
                  aria-hidden="true"
                />
                <span className="mt-2">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 z-40 flex md:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-blue-700 pt-5 pb-4 flex-1 flex flex-col">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-1 right-0 -mr-14 p-1">
                  <button
                    type="button"
                    className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    <span className="sr-only">Close sidebar</span>
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 px-4 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                  alt="Workflow"
                />
              </div>
              <div className="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                <nav className="h-full flex flex-col">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={'/application/' + role + '/' + item.href}
                        className={classNames(
                          item.current
                            ? 'bg-blue-800 text-white'
                            : 'text-blue-100 hover:bg-blue-800 hover:text-white',
                          'group py-2 px-3 rounded-md flex items-center text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? 'text-white'
                              : 'text-blue-300 group-hover:text-white',
                            'mr-3 h-6 w-6'
                          )}
                          aria-hidden="true"
                        />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="w-full">
          <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-1 flex justify-between px-4 sm:px-6">
              <div className="flex-1 flex">
                <form className="w-full flex md:ml-0" action="#" method="GET">
                  <label htmlFor="search_field" className="sr-only">
                    Search all files
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                      <SearchIcon
                        className="flex-shrink-0 h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      name="search_field"
                      id="search_field"
                      className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:hidden"
                      placeholder="Search"
                      type="search"
                    />
                    <input
                      name="search_field"
                      id="search_field"
                      className="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block"
                      placeholder="Search all files"
                      type="search"
                    />
                  </div>
                </form>
              </div>
              <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                {/* Profile dropdown */}
                <Menu as="div" className="relative flex-shrink-0">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <Menu.Item>
                            <button
                              className="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700 w-full"
                              onClick={async () => {
                                logout()
                                dispatch(clearSession())
                                history.push('/')
                              }}
                            >
                              Logout
                            </button>
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>

                <button
                  type="button"
                  className="flex bg-indigo-600 p-1 rounded-full items-center justify-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <PlusIconOutline className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">Add file</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        {children}
      </div>
    </>
  )
}

export default HeaderApp

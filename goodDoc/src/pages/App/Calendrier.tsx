import FullCalendar from '@fullcalendar/react'
import { Menu, Transition } from '@headlessui/react'
import {
  ReplyIcon,
  PencilIcon,
  UserAddIcon,
  ChevronDownIcon,
} from '@heroicons/react/outline'
import React, { Fragment } from 'react'

import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { CheckBox } from '../../components/common/Button/Buttons'
import { DropDown } from '../../components/common/List/DropDown'

import MyCalendar from '../../components/Module/MyCalendar'
import { classNames } from '../../utils/classNames'
import AddRDV from '../../components/Module/AddRDV'

const people = [
  { id: 1, name: 'Jour' },
  { id: 2, name: 'Semaine' },
  { id: 3, name: 'Mois' },
  { id: 4, name: 'Année' },
]

const Calendrier: React.FC = () => {
  const refCalendar: React.RefObject<FullCalendar> = React.createRef()

  console.log(`refCalendar`, refCalendar)
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex-shrink-0 bg-white border-b border-gray-200">
        {/* Toolbar*/}
        <div className="h-16 flex flex-col justify-center">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="py-3 flex justify-between">
              {/* Left buttons */}
              <div>
                <span className="relative z-10 inline-flex shadow-sm rounded-md sm:shadow-none sm:space-x-3">
                  <span className="inline-flex sm:shadow-sm">
                    <button
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                    >
                      <ReplyIcon
                        className="mr-2.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>Today</span>
                    </button>
                    <button
                      type="button"
                      className="hidden sm:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                    >
                      <PencilIcon
                        className="mr-2.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>Mofier les ouverture</span>
                    </button>
                    <button
                      type="button"
                      className="hidden sm:inline-flex -ml-px relative items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                    >
                      <UserAddIcon
                        className="mr-2.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>Nouveau Patient</span>
                    </button>
                  </span>

                  <Menu
                    as="span"
                    className="-ml-px relative block sm:shadow-sm sm:hidden"
                  >
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 sm:rounded-md sm:px-3">
                            <span className="sr-only sm:hidden">More</span>
                            <span className="hidden sm:inline">More</span>
                            <ChevronDownIcon
                              className="h-5 w-5 text-gray-400 sm:ml-2 sm:-mr-1"
                              aria-hidden="true"
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
                            className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                          >
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#d"
                                    className={classNames(
                                      active
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-700',
                                      'block sm:hidden px-4 py-2 text-sm'
                                    )}
                                  >
                                    Mofier les ouverture
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#s"
                                    className={classNames(
                                      active
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-700',
                                      'block sm:hidden px-4 py-2 text-sm'
                                    )}
                                  >
                                    Nouveau Patient
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </span>
              </div>

              <div>
                <DropDown<{ id: number; name: string }> options={people} />
              </div>
              {/* Right buttons */}
              <nav aria-label="Pagination">
                <span className="relative z-0 inline-flex shadow-sm rounded-md">
                  <AddRDV />
                </span>
              </nav>
            </div>
          </div>
        </div>
        {/* Message header */}
      </div>

      <div className="flex-1 flex flex-col md:flex-row h-full space-y-2 space-x-0 md:space-y-0 md:space-x-0 overflow-hidden">
        <div className="flex-1 overflow-auto">
          <div className="flex flex-col divide-y divide-gray-200 h-full">
            <DayPicker className="w-full z-0" />
            <div className="h-full flex justify-center">
              <div className="mt-4 sm:mt-2 px-2 sm:col-span-2">
                <div className="max-w-lg space-y-4">
                  <CheckBox title="text 1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block flex-4 max-h-full h-full overflow-auto overflow-none">
          <div className="relative h-full">
            <div className="absolute w-full max-h-full right-0 left-0 top-0 h-full">
              <MyCalendar setRef={refCalendar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendrier

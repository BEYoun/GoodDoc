import React from 'react'
import ApplicationDefaultLayout from '../../../components/layout/ApplicationDefaultLayout'
import { Route, Switch as SwitchRouter, useParams } from 'react-router'
import { useGetCabinetByIdQuery } from '../../../graphql/generated/graphql'
import { Link } from 'react-router-dom'
import {
  BellIcon,
  CashIcon,
  ChevronLeftIcon,
  CogIcon,
  KeyIcon,
  PhotographIcon,
  SearchCircleIcon,
  ViewGridAddIcon,
} from '@heroicons/react/outline'
import { UsersIcon } from '@heroicons/react/solid'
import UsersCabinet from '../../../components/Cabinet/UsersCabinet'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const subNavigation = [
  {
    name: 'Account',
    description:
      'Ullamcorper id at suspendisse nec id volutpat vestibulum enim. Interdum blandit.',
    href: '',
    icon: CogIcon,
    current: true,
  },
  {
    name: 'Users',
    description:
      'Enim, nullam mi vel et libero urna lectus enim. Et sed in maecenas tellus.',
    href: 'users',
    icon: UsersIcon,
    current: false,
  },
  {
    name: 'Notifications',
    description:
      'Enim, nullam mi vel et libero urna lectus enim. Et sed in maecenas tellus.',
    href: '#',
    icon: BellIcon,
    current: false,
  },
  {
    name: 'Security',
    description:
      'Semper accumsan massa vel volutpat massa. Non turpis ut nulla aliquet turpis.',
    href: '#',
    icon: KeyIcon,
    current: false,
  },
  {
    name: 'Appearance',
    description:
      'Magna nulla id sed ornare ipsum eget. Massa eget porttitor suscipit consequat.',
    href: '#',
    icon: PhotographIcon,
    current: false,
  },
  {
    name: 'Billing',
    description:
      'Orci aliquam arcu egestas turpis cursus. Lectus faucibus netus dui auctor mauris.',
    href: '#',
    icon: CashIcon,
    current: false,
  },
  {
    name: 'Integrations',
    description:
      'Nisi, elit volutpat odio urna quis arcu faucibus dui. Mauris adipiscing pellentesque.',
    href: '#',
    icon: ViewGridAddIcon,
    current: false,
  },
  {
    name: 'Additional Resources',
    description:
      'Quis viverra netus donec ut auctor fringilla facilisis. Nunc sit donec cursus sit quis et.',
    href: '#',
    icon: SearchCircleIcon,
    current: false,
  },
]

const ProfileCabinet: React.FC = () => {
  const { id }: never = useParams()
  const { data: info } = useGetCabinetByIdQuery({
    variables: {
      cabinetId: id,
    },
  })
  return (
    <ApplicationDefaultLayout>
      <div className="flex-1 flex flex-col overflow-y-auto xl:overflow-hidden">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="bg-white border-b border-blue-gray-200 xl:hidden"
        >
          <div className="max-w-3xl mx-auto py-3 px-4 flex items-start sm:px-6 lg:px-8">
            <a
              href="#d"
              className="-ml-1 inline-flex items-center space-x-3 text-sm font-medium text-blue-gray-900"
            >
              <ChevronLeftIcon
                className="h-5 w-5 text-blue-gray-400"
                aria-hidden="true"
              />
              <span>Parametrage du Cabinet {info?.getCabinetById?.name}</span>
            </a>
          </div>
        </nav>

        <div className="flex-1 flex xl:overflow-hidden">
          {/* Secondary sidebar */}
          <nav
            aria-label="Sections"
            className="hidden flex-shrink-0 w-96 bg-white border-r border-blue-gray-200 xl:flex xl:flex-col"
          >
            <div className="flex-shrink-0 h-16 px-6 border-b border-blue-gray-200 flex items-center">
              <p className="text-lg font-medium text-blue-gray-900">
                Parametrage du Cabinet {info?.getCabinetById?.name}
              </p>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto">
              {subNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={'/application/admin/client/' + id + '/' + item.href}
                  className={classNames(
                    item.current
                      ? 'bg-blue-50 bg-opacity-50'
                      : 'hover:bg-blue-50 hover:bg-opacity-50',
                    'flex p-6 border-b border-blue-gray-200'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <item.icon
                    className="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400"
                    aria-hidden="true"
                  />
                  <div className="ml-3 text-sm">
                    <p className="font-medium text-blue-gray-900">
                      {item.name}
                    </p>
                    <p className="mt-1 text-blue-gray-500">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </nav>

          {/* Main content */}
          <div className="flex-1 max-h-screen xl:overflow-y-auto">
            <SwitchRouter>
              <Route exact path="/application/admin/client/:id/">
                <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
                  <h1 className="text-3xl font-extrabold text-blue-gray-900">
                    Account
                  </h1>

                  <form className="mt-6 space-y-8 divide-y divide-y-blue-gray-200">
                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                      <div className="sm:col-span-6">
                        <h2 className="text-xl font-medium text-blue-gray-900">
                          Profile
                        </h2>
                        <p className="mt-1 text-sm text-blue-gray-500">
                          This information will be displayed publicly so be
                          careful what you share.
                        </p>
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="first_name"
                          className="block text-sm font-medium text-blue-gray-900"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="first_name"
                          id="first_name"
                          autoComplete="given-name"
                          className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium text-blue-gray-900"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last_name"
                          id="last_name"
                          autoComplete="family-name"
                          className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div className="sm:col-span-6">
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium text-blue-gray-900"
                        >
                          Username
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-blue-gray-300 bg-blue-gray-50 text-blue-gray-500 sm:text-sm">
                            workcation.com/
                          </span>
                          <input
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="username"
                            defaultValue="lisamarie"
                            className="flex-1 block w-full min-w-0 border-blue-gray-300 rounded-none rounded-r-md text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-6">
                        <label
                          htmlFor="photo"
                          className="block text-sm font-medium text-blue-gray-900"
                        >
                          Photo
                        </label>
                        <div className="mt-1 flex items-center">
                          <img
                            className="inline-block h-12 w-12 rounded-full"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="ml-4 flex">
                            <div className="relative bg-white py-2 px-3 border border-blue-gray-300 rounded-md shadow-sm flex items-center cursor-pointer hover:bg-blue-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 focus-within:ring-blue-500">
                              <label
                                htmlFor="user_photo"
                                className="relative text-sm font-medium text-blue-gray-900 pointer-events-none"
                              >
                                <span>Change</span>
                                <span className="sr-only"> user photo</span>
                              </label>
                              <input
                                id="user_photo"
                                name="user_photo"
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                              />
                            </div>
                            <button
                              type="button"
                              className="ml-3 bg-transparent py-2 px-3 border border-transparent rounded-md text-sm font-medium text-blue-gray-900 hover:text-blue-gray-700 focus:outline-none focus:border-blue-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-gray-50 focus:ring-blue-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="sm:col-span-6">
                        <label
                          htmlFor="description"
                          className="block text-sm font-medium text-blue-gray-900"
                        >
                          Description
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="description"
                            name="description"
                            rows={4}
                            className="block w-full border-blue-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                            defaultValue={''}
                          />
                        </div>
                        <p className="mt-3 text-sm text-blue-gray-500">
                          Brief description for your profile. URLs are
                          hyperlinked.
                        </p>
                      </div>

                      <div className="sm:col-span-6">
                        <label
                          htmlFor="url"
                          className="block text-sm font-medium text-blue-gray-900"
                        >
                          URL
                        </label>
                        <input
                          type="text"
                          name="url"
                          id="url"
                          className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="pt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                      <div className="sm:col-span-6">
                        <h2 className="text-xl font-medium text-blue-gray-900">
                          Personal Information
                        </h2>
                        <p className="mt-1 text-sm text-blue-gray-500">
                          This information will be displayed publicly so be
                          careful what you share.
                        </p>
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="email_address"
                          className="block text-sm font-medium text-blue-gray-900"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email_address"
                          id="email_address"
                          autoComplete="email"
                          className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="phone_number"
                          className="block text-sm font-medium text-blue-gray-900"
                        >
                          Phone number
                        </label>
                        <input
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          autoComplete="tel"
                          className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-blue-gray-900"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          id="country"
                          autoComplete="country"
                          className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="language"
                          className="block text-sm font-medium text-blue-gray-900"
                        >
                          Language
                        </label>
                        <input
                          type="text"
                          name="language"
                          id="language"
                          className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <p className="text-sm text-blue-gray-500 sm:col-span-6">
                        This account was created on{' '}
                        <time dateTime="2017-01-05T20:35:40">
                          January 5, 2017, 8:35:40 PM
                        </time>
                        .
                      </p>
                    </div>

                    <div className="pt-8 flex justify-end">
                      <button
                        type="button"
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </Route>
              <Route exact path="/application/admin/client/:id/users">
                <UsersCabinet />
              </Route>
            </SwitchRouter>
          </div>
        </div>
      </div>
    </ApplicationDefaultLayout>
  )
}

export default ProfileCabinet

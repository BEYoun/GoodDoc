import React from 'react'
import { CashIcon, ChevronRightIcon } from '@heroicons/react/solid'
import ApplicationDefaultLayout from '../../../components/layout/ApplicationDefaultLayout'
import PageHeader from '../../../components/common/PageHeader'
import CreateCabinet from './actions/createCabinet'
import { useGetAllCabinetQuery } from '../../../graphql/generated/graphql'
import { Link } from 'react-router-dom'

const Cabinet: React.FC = () => {
  const { data } = useGetAllCabinetQuery({ fetchPolicy: 'network-only' })
  return (
    <ApplicationDefaultLayout>
      {/* Page header */}
      <PageHeader title="Liste des Cabinets">
        <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Filtrer
          </button>
          <CreateCabinet />
        </div>
      </PageHeader>

      {data ? (
        <div className="mt-8">
          {/* Activity list (smallest breakpoint only) */}
          <div className="shadow sm:hidden">
            <ul className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
              {data?.allCabinet?.map((transaction) => (
                <li key={transaction?.id}>
                  <Link
                    to={'/application/admin/client/' + transaction?.id}
                    className="block px-4 py-4 bg-white hover:bg-gray-50"
                  >
                    <span className="flex items-center space-x-4">
                      <span className="flex-1 flex space-x-2 truncate">
                        <CashIcon
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="flex flex-col text-gray-500 text-sm truncate">
                          <span className="truncate">{transaction?.name}</span>
                          <span>
                            <span className="text-gray-900 font-medium">
                              {transaction?.address}
                            </span>{' '}
                            {transaction?.phone}
                          </span>
                        </span>
                      </span>
                      <ChevronRightIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <nav
              className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200"
              aria-label="Pagination"
            >
              <div className="flex-1 flex justify-between">
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
                  Previous
                </button>
                <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
                  Next
                </button>
              </div>
            </nav>
          </div>

          {/* Activity table (small breakpoint and up) */}
          <div className="hidden sm:block">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col mt-2">
                <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nom du cabinet
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Numero de telephone
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Address
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {data?.allCabinet?.map((transaction) => (
                        <tr key={transaction?.id} className="bg-white">
                          <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <div className="flex">
                              <Link
                                to={
                                  '/application/admin/client/' + transaction?.id
                                }
                                className="group inline-flex space-x-2 truncate text-sm"
                              >
                                <CashIcon
                                  className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                <p className="text-gray-500 truncate group-hover:text-gray-900">
                                  {transaction?.name}
                                </p>
                              </Link>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                            <span className="text-gray-900 font-medium">
                              {transaction?.phone}{' '}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                            <span className="text-gray-900 font-medium">
                              {transaction?.address}{' '}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* Pagination */}
                  <nav
                    className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                    aria-label="Pagination"
                  >
                    <div className="hidden sm:block">
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to{' '}
                        <span className="font-medium">10</span> of{' '}
                        <span className="font-medium">20</span> results
                      </p>
                    </div>
                    <div className="flex-1 flex justify-between sm:justify-end">
                      <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Previous
                      </button>
                      <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Next
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </ApplicationDefaultLayout>
  )
}

export default Cabinet

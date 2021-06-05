import React from 'react'
import { useGetAllPatientsQuery } from '../../../graphql/generated/graphql'
const ListPatients: React.FC = () => {
  const { data } = useGetAllPatientsQuery()
  return (
    <>
      <div className="relative">
        <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
          <h3>None</h3>
        </div>
        <ul className="relative z-0 divide-y divide-gray-200">
          {data?.getAllPatients?.map((person) => (
            <li key={person?.id}>
              <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                <div className="flex-shrink-0">
                  <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                    <svg
                      className="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <a href="#s" className="focus:outline-none">
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">
                      CIN: {person?.cin}
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {person?.firstName}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {person?.lastName}
                    </p>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ListPatients

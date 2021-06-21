import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import React from 'react'
import { Route, Switch, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useGetPatientByIdQuery } from '../../../graphql/generated/graphql'
import { classNames } from '../../../utils/classNames'
const tabs = [
  { name: 'Profile', href: '', current: true },
  { name: 'Historique du patient', href: 'historique', current: false },
  { name: 'Document et Analyse', href: 'doc', current: false },
  { name: 'Antecedent', href: 'antecedant', current: false },
]

const ProfilePatient: React.FC = () => {
  const { idPatient: patientId }: never = useParams()
  const { data, loading } = useGetPatientByIdQuery({ variables: { patientId } })
  if (loading) {
    return <div>Loading</div>
  }
  console.log(`data`, data)
  return (
    <>
      <div>
        <div>
          <div className="h-32 w-full object-cover lg:h-48 bg-black bg-opacity-20" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <span className="inline-block h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32 overflow-hidden bg-gray-100">
                <svg
                  className="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
            </div>
            <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                <h1 className="text-2xl font-bold text-gray-900 truncate">
                  {data?.getPatientById?.firstName}{' '}
                  {data?.getPatientById?.lastName}
                </h1>
              </div>
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  <MailIcon
                    className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span>Demarrer une consultation instantané</span>
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  <PhoneIcon
                    className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span>Call</span>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
            <h1 className="text-2xl font-bold text-gray-900 truncate">
              {data?.getPatientById?.firstName} {data?.getPatientById?.lastName}
            </h1>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="hidden sm:block mt-6 sm:mt-2 2xl:mt-5">
        <div className="border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <Link
                  key={tab.name}
                  to={
                    '/application/doctor/patients/' + patientId + '/' + tab.href
                  }
                  className={classNames(
                    tab.current
                      ? 'border-pink-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {tab.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <Switch>
        <Route exact path="/application/doctor/patients/:idPatient">
          {/* Description list */}
          <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Nom</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {data?.getPatientById?.firstName}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Prenom</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {data?.getPatientById?.lastName}
                </dd>
              </div>
            </dl>
          </div>
        </Route>
      </Switch>
    </>
  )
}

export default ProfilePatient

import React from 'react'
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
import CreateMedecin from '../../pages/App/Cabinet/actions/createDocteur'
import CreateAssistante from '../../pages/App/Cabinet/actions/createAssitante'

const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]
const UsersCabinet: React.FC = () => {
  return (
    <div className="max-w-8xl mx-auto">
      <div className="px-4 sm:flex sm:justify-between sm:items-baseline sm:px-6 lg:px-8 bg-white p-5">
        <div className="sm:w-0 sm:flex-1">
          <h1
            id="message-heading"
            className="text-lg font-medium text-gray-900"
          >
            Les utilisateurs du Cabinet
          </h1>
          <p className="mt-1 text-sm text-gray-500 truncate">test sadffe saz</p>
        </div>

        <div className="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start space-x-6">
          <CreateAssistante />
          <CreateMedecin />
        </div>
      </div>
      <h2 className="mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
        Docteurs
      </h2>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 px-4">
        {people.map((person) => (
          <li
            key={person.email}
            className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div className="w-full flex items-center justify-between p-6 space-x-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="text-gray-900 text-sm font-medium truncate">
                    {person.name}
                  </h3>
                  <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                    {person.role}
                  </span>
                </div>
                <p className="mt-1 text-gray-500 text-sm truncate">
                  {person.title}
                </p>
              </div>
              <img
                className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                src={person.imageUrl}
                alt=""
              />
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="w-0 flex-1 flex">
                  <a
                    href={`mailto:${person.email}`}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                  >
                    <MailIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Email</span>
                  </a>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href={`tel:${person.telephone}`}
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                  >
                    <PhoneIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Call</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <h2 className="mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
        Assistant
      </h2>
    </div>
  )
}

export default UsersCabinet

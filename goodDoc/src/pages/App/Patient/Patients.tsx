import { ChevronLeftIcon, SearchIcon } from '@heroicons/react/solid'
import AddPatient from '../../../components/Cabinet/Patient/AddPatient'
import ListPatients from '../../../components/Cabinet/Patient/ListPatients'
import ProfilePatient from '../../../components/Cabinet/Patient/ProfilePatient'

const Patients: React.FC = () => {
  return (
    <div className="flex-1 relative z-0 flex overflow-hidden">
      <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
        {/* Breadcrumb */}
        <nav
          className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
          aria-label="Breadcrumb"
        >
          <a
            href="#s"
            className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
          >
            <ChevronLeftIcon
              className="-ml-2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span>Directory</span>
          </a>
        </nav>

        <ProfilePatient />
      </main>
      <aside className="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200">
        <div className="px-6 pt-6 pb-4">
          <h2 className="text-lg font-medium text-gray-900">Directory</h2>
          <p className="mt-1 text-sm text-gray-600">
            Search directory of 3,018 employees
          </p>
          <div className="mt-6 flex space-x-4">
            <div className="flex-1 min-w-0">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Search"
                />
              </div>
            </div>
            <AddPatient />
          </div>
        </div>
        {/* Directory list */}
        <nav className="flex-1 min-h-0 overflow-y-auto" aria-label="Directory">
          <ListPatients />
        </nav>
      </aside>
    </div>
  )
}

export default Patients

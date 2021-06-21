import React, { useRef, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { PlusIcon, UserAddIcon } from '@heroicons/react/outline'
import { Formik } from 'formik'
import { GraphQLError } from 'graphql'
import {
  GetAllPatientsDocument,
  useCreatePatientMutation,
} from '../../../graphql/generated/graphql'
import Modal from '../../common/Modal'
interface Patient {
  cin: string
  sex: string
  firstName: string
  lastName: string
  email: string
  address: string
  zipCode: number
  assurance: string
  birthday: string
  profession: string
  country: string
  numberPhone: string
}
const AddPatient: React.FC = () => {
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  const [create] = useCreatePatientMutation()
  const init: Patient = {
    cin: '',
    sex: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    zipCode: 0,
    assurance: '',
    birthday: '',
    profession: '',
    country: '',
    numberPhone: '',
  }
  return (
    <>
      <button
        className="inline-flex justify-center px-3.5 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        onClick={() => {
          setOpen(true)
        }}
      >
        <PlusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        <span className="sr-only">Search</span>
      </button>

      <Modal open={open} setOpen={setOpen}>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <Formik
            initialValues={init}
            validate={(values) => {
              const errors: {
                cin?: string | undefined
              } = {}
              if (!values.cin) {
                errors.cin = 'Required'
              }
              return errors
            }}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true)
              await create({
                variables: { ...values },
                update: (cache, { data }) => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const getExisting: any = cache.readQuery({
                    query: GetAllPatientsDocument,
                  })
                  // Add the new todo to the cache
                  const existing = getExisting ? getExisting.getAllPatients : []
                  const patient = data?.createPatient
                  cache.writeQuery({
                    query: GetAllPatientsDocument,
                    data: { getAllPatients: [patient, ...existing] },
                  })
                },
              })
                .then(({ data }) => {
                  if (data?.createPatient) setOpen(false)
                })
                .catch((errors: GraphQLError) => {
                  console.log(`errors`, errors.message)
                })
              setSubmitting(false)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form action="#" method="POST" onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <UserAddIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Création nouveau Patient
                      </Dialog.Title>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="mt-5 md:mt-0 md:col-span-3">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="cin"
                              className="block text-sm font-medium text-gray-700"
                            >
                              CIN
                            </label>
                            <input
                              type="text"
                              name="cin"
                              id="cin"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.cin}
                              autoComplete="given-name"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            {errors.cin && touched.cin && errors.cin}
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="firstName"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Nom
                            </label>
                            <input
                              type="text"
                              name="firstName"
                              id="firstName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.firstName}
                              autoComplete="given-name"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="lastName"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Prenom
                            </label>
                            <input
                              type="text"
                              name="lastName"
                              id="lastName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.lastName}
                              autoComplete="given-name"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-4">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email
                            </label>
                            <input
                              type="text"
                              name="email"
                              id="email"
                              autoComplete="email"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-2">
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Country / Region
                            </label>
                            <select
                              id="country"
                              name="country"
                              autoComplete="country"
                              value={values.country}
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option></option>
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
                            </select>
                          </div>

                          <div className="col-span-6">
                            <label
                              htmlFor="address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Address
                            </label>
                            <input
                              type="text"
                              name="address"
                              id="address"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.address}
                              autoComplete="street-address"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            {errors.address &&
                              touched.address &&
                              errors.address}
                          </div>

                          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              name="city"
                              id="city"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label
                              htmlFor="state"
                              className="block text-sm font-medium text-gray-700"
                            >
                              State / Province
                            </label>
                            <input
                              type="text"
                              name="state"
                              id="state"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label
                              htmlFor="postal_code"
                              className="block text-sm font-medium text-gray-700"
                            >
                              ZIP / Postal
                            </label>
                            <input
                              type="text"
                              name="postal_code"
                              id="postal_code"
                              autoComplete="postal-code"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                    disabled={isSubmitting}
                  >
                    Ajouter
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Annuler
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  )
}

export default AddPatient

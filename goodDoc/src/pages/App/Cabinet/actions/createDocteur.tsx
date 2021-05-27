import React, { useRef, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { UserAddIcon } from '@heroicons/react/outline'
import { useCreateDoctorMutation } from '../../../../graphql/generated/graphql'
import { Formik } from 'formik'
import { GraphQLError } from 'graphql'
import Modal from '../../../../components/common/Modal'
import { useParams } from 'react-router'

const CreateMedecin: React.FC = () => {
  const { id }: never = useParams()
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  const [create] = useCreateDoctorMutation()
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={() => {
          setOpen(true)
        }}
      >
        Ajout Compte medecin
      </button>

      <Modal open={open} setOpen={setOpen}>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <Formik
            initialValues={{ username: '' }}
            validate={(values) => {
              const errors: {
                username?: string | undefined
              } = {}
              if (!values.username) {
                errors.username = 'Required'
              }
              return errors
            }}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true)
              await create({
                variables: {
                  cabinetId: id,
                  password: 'nino',
                  username: values.username,
                },
              })
                .then(({ data }) => {
                  if (data?.createUserClient) setOpen(false)
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
                        Création compte Docteur
                      </Dialog.Title>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="mt-5 md:mt-0 md:col-span-3">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Nom du cabinet
                            </label>
                            <input
                              type="text"
                              name="username"
                              id="username"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.username}
                              autoComplete="given-name"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            {errors.username &&
                              touched.username &&
                              errors.username}
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

export default CreateMedecin

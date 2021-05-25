import { Formik } from 'formik'
import { GraphQLError } from 'graphql'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  useLogoutMutation,
  useCreateUserSessionMutation,
} from './graphql/generated/graphql'

import { clearSession, ISession, setSession } from './store/ducks/session'

export const Counter = () => {
  const [count, setCount] = useState(0)
  const session: string = useSelector((state: ISession) => state.session)
  const [logout] = useLogoutMutation()
  const [login] = useCreateUserSessionMutation()
  const dispatch = useDispatch()
  if (session) {
    return (
      <div>
        <div>Account</div>
        <button
          onClick={() => {
            dispatch(clearSession())
            logout()
          }}
        >
          Logout
        </button>
      </div>
    )
  }
  return (
    <div>
      <h3>Login</h3>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={(values) => {
          const errors: {
            username?: string | undefined
            password?: string | undefined
          } = {}
          if (!values.username) {
            errors.username = 'Required'
          }
          return errors
        }}
        onSubmit={async (values, { setSubmitting }) => {
          await login({ variables: values })
            .then(({ data }) => {
              if (data?.createUserSession.user.username)
                dispatch(setSession(data?.createUserSession.user.username))
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            {errors.username && touched.username && errors.username}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

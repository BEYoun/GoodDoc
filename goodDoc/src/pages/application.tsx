import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { useMeQuery } from '../graphql/generated/graphql'
import { clearSession, ISession, setSession } from '../store/ducks/session'
import Routes from './App/routes'

const Application: React.FC = () => {
  const dispatch = useDispatch()
  const session = useSelector(
    (state: { session: ISession }) => state.session?.username
  )
  const { loading, error, data } = useMeQuery({ fetchPolicy: 'network-only' })
  if (data?.userSession && data?.userSession.user.username) {
    dispatch(setSession(data?.userSession.user))
  } else {
    dispatch(clearSession())
  }
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return !session ? <Redirect to="/login" /> : <Routes />
}

export default Application

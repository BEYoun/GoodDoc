import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { useLogoutMutation } from '../../../graphql/generated/graphql'
import { clearSession } from '../../../store/ducks/session'

const LogoutButton: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [logout] = useLogoutMutation()
  return (
    <div>
      <button
        onClick={async () => {
          logout()
          dispatch(clearSession())
          history.push('/')
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default LogoutButton

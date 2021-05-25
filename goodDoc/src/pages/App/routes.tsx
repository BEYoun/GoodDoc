import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch, useHistory } from 'react-router'
import LogoutButton from '../../components/common/Button/LogoutButton'
import HeaderApp from '../../components/common/Header/App/HeaderApp'
import DefaultLayout from '../../components/layout/DefaultLayout'
import { ISession } from '../../store/ducks/session'

const Routes: React.FC = () => {
  const history = useHistory()
  const role = useSelector(
    (state: { session: ISession }) => state.session?.role
  )
  if (role === 'admin') history.push('/application/admin')
  if (role === 'doctor') history.push('/application/doctor')
  if (role === 'assistant') history.push('/application/assistant')
  return (
    <DefaultLayout>
      <HeaderApp>
        <Switch>
          <Route exact path="/application/doctor">
            <div>admin</div>
          </Route>
          <Route exact path="/application/admin">
            <div>dd</div>
            <LogoutButton />
          </Route>
          <Route path="/application/assistant">
            <div>dd</div>
          </Route>
        </Switch>
      </HeaderApp>
    </DefaultLayout>
  )
}

export default Routes

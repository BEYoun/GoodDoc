import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch, useHistory } from 'react-router'
import HeaderApp from '../../components/common/Header/App/HeaderApp'
import DefaultLayout from '../../components/layout/DefaultLayout'
import { ISession } from '../../store/ducks/session'
import Cabinets from './Cabinet/Cabinets'
import Patients from './Patient/Patients'
import ProfileCabinet from './Cabinet/ProfileCabinet'

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
          <Route path="/application/doctor">
            <Switch>
              <Route exact path="/application/doctor/patients">
                <Patients />
              </Route>
            </Switch>
          </Route>
          <Route path="/application/admin">
            <Switch>
              <Route exact path="/application/admin/clients">
                <Cabinets />
              </Route>
              <Route path="/application/admin/client/:id">
                <ProfileCabinet />
              </Route>
            </Switch>
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

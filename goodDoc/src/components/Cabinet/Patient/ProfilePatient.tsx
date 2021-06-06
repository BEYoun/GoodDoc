import React from 'react'
import { Route, Switch } from 'react-router'

import InfoPatient from './InfoPatient'

const ProfilePatient: React.FC = () => {
  return (
    <article className="h-full">
      {/* Profile header */}
      <Switch>
        <Route exact path="/application/doctor/patients">
          <div className="flex justify-center items-center h-full">
            <div>
              <p>Pas de patient Selectionné</p>
            </div>
          </div>
        </Route>
        <Route path="/application/doctor/patients/:idPatient">
          <InfoPatient />
        </Route>
      </Switch>
    </article>
  )
}

export default ProfilePatient

import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import Permissions, { PUBLIC } from './permissions'
import App from './App'
import Centros from './components/Centros'
import Welcome from './components/Welcome'
import Store from './components/Store'
//import Login from 'components/pages/Login         <Route path='/login' exact component={Permissions(Login, PUBLIC)} />'
import { Redirect } from 'react-router-dom';

function Routes() {
  return (
    <App>
      <Switch>
        <Route exact path='/'>
          <Welcome />
          <Centros />
        </Route>
        <Route exact path='/store' component={Store} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </App>
  )
}

export default Routes

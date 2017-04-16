// Configuracion de las rutas
import React from 'react'
import {
	Route,
	Switch,
} from 'react-router-dom';

import Home from './Home.jsx';

function Pages() {
  return (
    <main role="application">
      <Switch>
        {/* Home list memes */}
        <Route
          path="/"
          exact
          component={Home}
        />
      </Switch>
    </main>
  )

}

export default Pages

// Configuracion de las rutas
import React from 'react'
import {
	Route,
	Switch,
} from 'react-router-dom';

import Home from './Home.jsx';
import SingleMeme from './SingleMeme.jsx';

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
				{/* Single meme */}
        <Route
          path="/meme/:id"
          exact
          component={SingleMeme}
        />
      </Switch>
    </main>
  )

}

export default Pages

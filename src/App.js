import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Homepage from './components/Homepage'
import Layout from './layout/Layout'
import AspectJesse from './components/Aspects/AspectJesse'
import AspectBruce from './components/Aspects/AspectBruce'
import AspectJalaine from './components/Aspects/AspectJalaine'
import AspectMariela from './components/Aspects/AspectMariela'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Dashboard />
        </Route>
        <Layout>
          <Route path='/homepage'>
            <Homepage />
          </Route>
          <Route path='/maya-religion'>
            <AspectJesse />
          </Route>
          <Route path='/maya-architecture'>
            <AspectBruce />
          </Route>
          <Route path='/maya-social-structure'>
            <AspectJalaine />
          </Route>
          <Route path='/maya-agriculture'>
            <AspectMariela />
          </Route>
        </Layout>
      </Switch>
    </Router>
  )
}

export default App

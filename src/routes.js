import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Site from './Site.js'
import Home from './Home.js'
import Lab from './Lab.js'
import Team from './Team.js'
import Clients from  './Clients.js'
import Contact from './Contact.js'

const routes = (
  <Route path="/" component={Site}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="lab" component={Lab}></Route>
    <Route path="team" component={Team}></Route>
    <Route path="clients" component={Clients}></Route>
    <Route path="contact" component={Contact}></Route>
  </Route>
)

export default routes

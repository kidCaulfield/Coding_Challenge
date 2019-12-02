import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Navbar from '../Navbar/Navbar';
import Form from '../Form/Form';

const Router = (props) => {
  return (
    <main className="Container">
       <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path={`/`} component={HomePage} />
            <Route exact path={`/form`} component={Form} />
          </Switch>
       </BrowserRouter>
    </main>
  )
}

export default Router;
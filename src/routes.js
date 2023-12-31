import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from './pages/Main/Index'
import Repositorio from './pages/Repositorio/Index'

export default function Routes(){
    return(  
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/repositorio/:repositorio" component={Repositorio} />
        </Switch>
      </BrowserRouter>
    );
}
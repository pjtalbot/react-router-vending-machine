import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import VendingMachine from "./VendingMachine";
// import Sardines from "./Sardines";
import Chips from "./Chips";
// import Soda from "./Soda";
import Candy from "./Candy"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <VendingMachine />
        </Route>
        {/* <Route path="/soda" exact>
          <Soda />
        </Route> */}
        <Route path="/chips" exact>
          <Chips />
        </Route>
        {/* <Route path="/sardines" exact>
          <Sardines />
        </Route> */}
        <Route path="/candy" exact>
          <Candy />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

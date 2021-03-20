import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Portfolio from "./pages/Portfolio"
import Foot from "./components/Foot";



    //each object should be built the same way and 1 object per project on the page


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <AboutMe />
          </Route>
          <Route exact path="/projects">
            <Portfolio />
          </Route >
           
          <Route exact path="/contact">
          <Contact />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>

        <Foot />
      </div>
    </Router>
  );
}

export default App;

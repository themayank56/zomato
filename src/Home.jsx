import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Subnav from "./Subnav";
import Overview from "./Overview";
import Orderonline from "./Orderonline";
import Contect from "./Contect";
import Photo from "./Photo";



import {
  BrowserRouter as Router,
  Switch, Route, Redirect} from "react-router-dom";
const App = () => {
  return (
    <>  
    <Router>
      <Subnav />
        <main> 
          <Switch>
            <Route exact path="/" component={Orderonline} />
            <Route exact path="/Orderonline" component={Orderonline} />
            <Route exact path="/overview" component={Overview} />
            <Route exact path="/photo" component={Photo} />
            <Route exact path="/contect" component={Contect} />
            <Redirect to ="/" />
          </Switch>
      
        </main>
    </Router>
      
    </>
  );
};

export default App;
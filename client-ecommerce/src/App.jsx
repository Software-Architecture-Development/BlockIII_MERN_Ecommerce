import { Browser Router as Router, Switch, Route } from "react-router-dom";
import Success from "./Success";
import Pay from "./Pay";

const App = () => {
  return (
    <Router>
      <Switch>
         <Route path="/pay">
           <Pay />
         </Route>
         <Route path="/success">
           <Success />
         </Route>
      </Switch>
         </Router>
  );
}; 
    
 
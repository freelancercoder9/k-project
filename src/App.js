import HeadComp from "./components/HeadComp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TestSec3 from "./components/TestSec3";
import TestSec1 from "./components/TestSec1";
import TestSec2 from "./components/TestSec2";
import TestSec5 from "./components/TestSec5";
import TestHeader from "./components/TestHeader";
import Casousel from "./components/Casousel";

function App() {
  return (
    // <div>
    //   <Router>
    //     <Switch>
    //       <Route path="/" component={HomeScreen} exact={true}></Route>
    //       <Route path="/section3" component={Section3} exact={true}></Route>
    //     </Switch>
    //   </Router>
    // </div>
    // <TestSec3></TestSec3>
    // <div>
    //   <TestSec1></TestSec1>
    // </div>
    // <TestSec2></TestSec2>
    // <TestSec5></TestSec5>
    <div>
      <TestHeader></TestHeader>
      <Casousel></Casousel>
      <TestSec2></TestSec2>
      <TestSec3></TestSec3>
      <TestSec5></TestSec5>
    </div>
  );
}

export default App;

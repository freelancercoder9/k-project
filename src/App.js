import HeadComp from "./components/HeadComp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TestSec3 from "./components/TestSec3";
import TestSec1 from "./components/TestSec1";
import TestSec2 from "./components/TestSec2";
import TestSec5 from "./components/TestSec5";
import TestHeader from "./components/TestHeader";
import Casousel from "./components/Casousel";
import Brand from "./components/Brand";
import Section4 from "./components/Section4";
import TestSec6 from "./components/TestSec6";
import Footer from "./components/Footer";
import Footer1 from "./components/Footer1";

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
      <Brand></Brand>
      <Casousel></Casousel>
      <TestSec1></TestSec1>
      <TestSec2></TestSec2>
      <TestSec3></TestSec3>
      <TestSec5></TestSec5>
      <Section4></Section4>
      <TestSec6></TestSec6>
      <Footer></Footer>
      <Footer1></Footer1>
    </div>
  );
}

export default App;

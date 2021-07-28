import Home from "./Home";
import Navbar from "./Navbar";
import Submenu from "./Submenu";
import About from "./About";
import Error from "./Error";
import Projects from "./Projects";
import Contact from "./Contact";
import Sidebar from "./Sidebar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



function App() {
  return (
    <>
  <Router >
    
      <Navbar/>
      <Submenu/>
      <Sidebar/>
      <Switch>
      <Route exact path="/">
      <Home/>
    </Route>
      <Route path="/about">
      <About/>
    </Route>
    <Route path='/projects'>
      <Projects/>
    </Route>
    <Route path='/contact'>
      <Contact/>
    </Route>
    <Route path="*">
      <Error/>
    </Route>
    </Switch>
  </Router>
    </>
  );
}

export default App;

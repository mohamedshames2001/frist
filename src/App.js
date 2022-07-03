import React from "react";
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css"
import Home from "./components/pages/Home"
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import SignUp from "./components/pages/SignUp";
function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/products" exact component={Products} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </Router>
    
    </>
  );
}

export default App;

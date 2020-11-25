import React from "react";
import { Navbar, Nav, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";

function Menu() {

  return (


    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/" path="/" component={Home}>Home</Nav.Link>
          <Nav.Link href="/favorites" path="/favorites" component={Favorites}>Favorites</Nav.Link>
        </Nav>
        <Button variant="light">Log Out</Button>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/favorites" component={() => <Favorites isMovieFavorite={true} />} />
        </Switch>
      </Router>
    </>

  );
}

export default Menu;
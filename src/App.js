import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import AppNavbar from "./components/layout/AppNavbar";
import Dashboard from "./components/layout/DashBoard";
import AddClient from "./components/clients/AddClient";
import EditClient from "./components/clients/EditClient";
import ClientDetails from "./components/clients/ClientDetails";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/client/add" component={AddClient} />
              <Route exact path="/client/edit/:id" component={EditClient} />
              <Route exact path="/client/:id" component={ClientDetails} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

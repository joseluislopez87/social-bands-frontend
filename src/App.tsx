import "bulma";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import User from "./views/User/User";

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

function AppRouter() {
  return (
    <Router>
      <Navbar />

      <section className="section">
        <div className="container">
          <div className="columns">
            <Route path="/login/" component={Login} />
            <Route path="/user/" component={User} />
          </div>
        </div>
      </section>
    </Router>
  );
}

export default App;

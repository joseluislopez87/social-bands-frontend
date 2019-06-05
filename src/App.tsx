import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

function User() {
  return <h2>User</h2>;
}

function UserLogin() {
  return <Login />;
}

function Routes() {
  return(
    <div>
      <Link to="/login/" className="button is-primary">Login</Link>
      <Link to="/user/" className="button is-light">User</Link>
    </div>
  );
}

function AppRouter() {
  return (
    <Router>
      <Navbar>
        <Routes />
      </Navbar>

      <section className="section">
        <div className="container">
          <Route path="/login/" component={UserLogin} />
          <Route path="/users" component={User} />
        </div>
      </section>
    </Router>
  );
}

export default App;

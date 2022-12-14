import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs Page/AboutUs';
import Announcements from './pages/Announcements';
import Signup from './pages/Signup Page/SignUp';
import Login from "./pages/Login Page/Login";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/announcements' component={Announcements} />
          <Route path='/sign-up' component={Signup} />
          <Route path='/login' component={Login} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

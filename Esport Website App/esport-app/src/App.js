import React from 'react';
import Navbar from './components/NavBar/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Announcements from './pages/Announcements';
import Signup from './pages/SignUp';

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
        </Switch>
      </Router>
    </>
  );
}

export default App;

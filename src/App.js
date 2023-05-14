import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Logout from './Logout';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
// import Login from './Login';
import ContactUs from './Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  BrowserRouter,
} from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') !== null);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Mobilic</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className='nav-link' to='/home'>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className='nav-link' to='/contactus'>
                Contact us
              </Link>
            </li>
            {loggedIn ? (
              <>
                <Logout onLogout={handleLogout} />
              </>
            ) : (
              <li className="nav-item">
                <Link className='nav-link' to='/login' >
                  Login
                </Link>
              </li>
            )}

            {/* <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li> */}
          </ul>
        </div>
      </nav>
      {/* <Login /> */}
      {/* <Router> */}
      <Routes>
        <Route exact path='/home' element={<Home />}></Route>
        <Route exact path='/login' element={<Login onLogin={handleLogin} />} ></Route>
        <Route exact path='/contactus' element={<ContactUs />}></Route>
      </Routes>
      {/* </Router> */}
    </div>

  );
}

export default App;

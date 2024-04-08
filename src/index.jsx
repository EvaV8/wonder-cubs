
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import PlayerProfiles from './pages/PlayerProfiles/PlayerProfiles';
import FixturesHome from './pages/Fixtures/Components/FixturesHome';
import FindYourClub from './pages/FindYourClub/FindYourClub';
import Blog from './pages/Blog/Blog';
import Login from './pages/Login/Login';
import LoginIncorrect from './pages/Login/components/LoginIncorrect';
import LoginCorrect from './pages/Login/components/LoginCorrect';
import Signup from './pages/Login/components/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="playerprofiles" element={<PlayerProfiles />} />
          <Route path="fixtures" element={<FixturesHome />} />
          <Route path="findyourclub" element={<FindYourClub />} />
          <Route path="blog" element={<Blog />} />
          <Route path="login" element={<Login />} />
          <Route path="login/incorrect" element={<LoginIncorrect />} />
          <Route path="login/correct" element={<LoginCorrect />} />
          <Route path="signup" element={ <Signup/> } />
        </Route>
      </Routes>
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
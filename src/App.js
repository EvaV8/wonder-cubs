/* ------------------------------LIONESSES SITE----------------------------------------- */
//We import here any Components or any styles we need 

import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from './Components/Footer';
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <Footer /> 
    </div>
  );
}

export default App;

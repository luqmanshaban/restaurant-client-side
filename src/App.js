import Home from "./Pages/HOME/Home";
import Login from './FORMS/Login'
import Signup from './FORMS/Signup'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/HOME/Landing";
import Menu from "./components/menu/Menu";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Landing />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/menu" Component={Menu} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </div>
  );
}

export default App;

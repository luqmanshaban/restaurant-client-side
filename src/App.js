import Home from "./Pages/HOME/Home";
import Login from './FORMS/Login'
import Signup from './FORMS/Signup'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/HOME/Landing";
import Menu from "./components/menu/Menu";


function App() {
  return (
    <div className="App">
      <Landing />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/menu" Component={Menu} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
      </Routes>
    </div>
  );
}

export default App;

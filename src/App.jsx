import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Lobby from "./pages/Lobby/Lobby";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";

function About() {
  return <h1>About page</h1>;
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

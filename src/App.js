import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Signin from "./pages/Signin";
import LoginContext from "./context/LoginContext";

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [signed, setSigned] = useState(false);

  return (
    <>
      <LoginContext.Provider
        value={{
          setSigned,
          signed: signed,
          setUsername,
          username: username,
          setAllPosts,
        }}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Signin />} />
            <Route path="result" element={<Result allPosts={allPosts} />} />
          </Routes>
        </Router>
      </LoginContext.Provider>
    </>
  );
}

export default App;

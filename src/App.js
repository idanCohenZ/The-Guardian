import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Signin from "./pages/Signin";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Signin />} />
          <Route path="result" element={<Result />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

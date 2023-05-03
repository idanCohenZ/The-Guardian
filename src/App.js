import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Signin from "./pages/Signin";
import LoginContext from "./context/LoginContext";
import FaceDetection from "./components/statistics/faceDetection/FaceDetection";

function App() {
  const [username, setUsername] = useState("");
  const [signed, setSigned] = useState(false);
  const faces = [
    { id: 1, image: "/images/test1.jpg", freq: 15 },
    { id: 2, image: "/images/test2.jpg", freq: 13 },
    { id: 3, image: "/images/test3.jpeg", freq: 12 },
    { id: 4, image: "/images/test4.jpeg", freq: 12 },
    { id: 5, image: "/images/test1.jpg", freq: 10 },
    { id: 6, image: "/images/test2.jpg", freq: 7 },
    { id: 7, image: "/images/test3.jpeg", freq: 4 },
    { id: 8, image: "/images/test4.jpeg", freq: 4 },
    { id: 9, image: "/images/test1.jpg", freq: 4 },
    { id: 10, image: "/images/test2.jpg", freq: 3 },
    { id: 11, image: "/images/test3.jpeg", freq: 3 },
    { id: 12, image: "/images/test4.jpeg", freq: 1 },
  ];
  const [allPosts, setAllPosts] = useState({
    posts: 0,
    relatives: faces,
    locations: [],
    activities: [],
  });
  // return (
  //   <>
  //     <FaceDetection faces={faces} />
  //   </>
  // );
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
            <Route path="result" element={<Result data={allPosts} />} />
            <Route
              path="result/face-detection"
              element={<FaceDetection faces={allPosts.relatives} />}
            />
          </Routes>
        </Router>
      </LoginContext.Provider>
    </>
  );
}

export default App;

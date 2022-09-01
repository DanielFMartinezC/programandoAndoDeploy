import "./App.css";



import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Courses from "./components/Courses";
import { useSelector } from "react-redux";
import Video from "./components/Video";


function App() {
  const { courses } = useSelector((state) => state.programandoando);
  console.log(courses);
  return (

    
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <h1>Hello World!!!</h1>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;

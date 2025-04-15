import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import Coding from "./pages/Coding";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <Navbar />
      <div className="w-full max-w-4xl mt-6 p-4 bg-white shadow-md rounded-lg">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/coding" element={<Coding />} />
        </Routes>
      </div>
    </div>
  );
}

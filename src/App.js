import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

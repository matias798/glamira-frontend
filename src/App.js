import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Navbar from "./components/sections/Navbar";
import ShopingCart from "./components/pages/Cart";
import Home from "./components/pages/Home";
import ProductDetail from "./components/pages/ProductDetail";
import Footer from "./components/sections/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<ShopingCart />} />
          <Route path="/product/:detail" element={<ProductDetail />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

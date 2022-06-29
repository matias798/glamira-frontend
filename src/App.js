// Modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import Navbar from "./components/sections/Navbar";
import ShopingCart from "./components/pages/Cart";
import Home from "./components/pages/Home";
import ProductDetail from "./components/pages/ProductDetail";
import Footer from "./components/sections/Footer";
import Payment from "./components/pages/Payment";
import ProductCategory from "./components/pages/ProductCategory";
import Error from "./components/pages/Error";
import Spinner from "./components/sections/Spinner";
import ContactUs from "./components/pages/ContactUs";
import Orders from "./components/pages/Orders";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  // Return -> Spinner if pages are loading
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<ShopingCart />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/product/detail" element={<ProductDetail />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/user/orders" element={<Orders />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

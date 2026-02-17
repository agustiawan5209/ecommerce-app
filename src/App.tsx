import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./assets/layout/MainLayout";
import Home from "./assets/pages/Home";
import Products from "./assets/pages/Products";
import ProductDetail from "./assets/pages/ProductDetail";
import Cart from "./assets/pages/Cart";
import Contact from "./assets/pages/Contact";
import About from "./assets/pages/About";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;

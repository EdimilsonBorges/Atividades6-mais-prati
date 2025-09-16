import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart /> }/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
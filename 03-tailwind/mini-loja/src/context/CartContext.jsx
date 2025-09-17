import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const exists = cart.some(item => item.title === product.title);
    if (!exists) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (title, quantity) => {
    setCart(cart.map(item =>
      item.title === title ? { ...item, quantity: quantity } : item
    ));
  };

  const removeFromCart = (title) => {
    setCart((prevCart) => prevCart.filter(item => item.title !== title));
  };

  const clearCart = () => {
    const confirmClear = window.confirm("Tem certeza que deseja finalizar a compra e limpar o carrinho?");
    if (confirmClear) {
      setCart([]);
      alert("Compra finalizada com sucesso!")
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

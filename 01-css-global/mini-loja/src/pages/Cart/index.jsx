import { useCart } from "../../context/CartContext";
import IconRemove from "../../assets/icons/trash.svg"; // ícone de lixeira

function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => {
    const priceNumber = parseFloat(
      item.price.replace("R$ ", "").replace(/\./g, "").replace(",", ".")
    );
    const quantity = item.quantity || 1;
    return sum + priceNumber * quantity;
  }, 0);

  const handleQuantityChange = (title, value) => {
    const quantity = Math.max(1, Number(value));
    updateQuantity(title, quantity);
  };

  return cart.length > 0 ? (
    <section style={{ padding: "100px" }}>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th className="borderHeadTable"></th>
            <th className="borderHeadTable"></th>
            <th className="borderHeadTable">Produto</th>
            <th className="borderHeadTable">Preço</th>
            <th className="borderHeadTable">Quantidade</th>
            <th className="borderHeadTable">Subtotal</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item, index) => {
            const priceNumber = parseFloat(
              item.price.replace("R$ ", "").replace(/\./g, "").replace(",", ".")
            );
            const quantity = item.quantity || 1;
            const subtotal = priceNumber * quantity;

            return (
              <tr key={index}>
                <td className="images-table">
                  <button
                    title="Remover do carrinho"
                    onClick={() => removeFromCart(item.title)}
                    style={{ color: "red", cursor: "pointer", border: "none", background: "transparent" }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
                      <path d="M22,5a1,1,0,0,1-1,1H3A1,1,0,0,1,3,4H8V3A1,1,0,0,1,9,2h6a1,1,0,0,1,1,1V4h5A1,1,0,0,1,22,5ZM4.934,21.071,4,8H20l-.934,13.071a1,1,0,0,1-1,.929H5.931A1,1,0,0,1,4.934,21.071ZM15,18a1,1,0,0,0,2,0V12a1,1,0,0,0-2,0Zm-4,0a1,1,0,0,0,2,0V12a1,1,0,0,0-2,0ZM7,18a1,1,0,0,0,2,0V12a1,1,0,0,0-2,0Z" />
                    </svg>
                  </button>
                </td>
                <td className="images-table">
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  />
                </td>

                <td className="title-table">{item.title}</td>
                <td className="price-table">{item.price}</td>
                <td className="amount-table">
                  <input
                    className="quantity-input"
                    type="number"
                    value={quantity}
                    min={1}
                    onChange={(e) => handleQuantityChange(item.title, e.target.value)}
                    style={{ width: "60px" }}
                  />
                </td>
                <td className="price-table">
                  R$ {subtotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </td>
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={5} style={{ textAlign: "right", fontWeight: "bold", padding: "8px" }}>
              Total
            </td>
            <td className="price-table">
              R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </td>
          </tr>
        </tfoot>
      </table>
      <button className="checkout-btn" type="button" onClick={clearCart}>Finalizar compra</button>
    </section>
  ) : (<section className="empty-cart">
    <p className="empty-text">O carrinho está vazio, adicione algum item ao carrinho para mostrar aqui.</p>
  </section>);
}

export default Cart;

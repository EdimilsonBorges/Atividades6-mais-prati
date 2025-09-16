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
                    style={{ cursor: "pointer", border: "none", background: "transparent" }}
                  >
                    <img src={IconRemove} alt="Remover" width={20} />
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
  ) : (<section  className="empty-cart">
    <p className="empty-text">O carrinho está vazio, adicione algum item ao carrinho para mostrar aqui.</p>
  </section>);
}

export default Cart;

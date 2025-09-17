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
            <th className="border border-[#ccc] p-2 text-[var(--text-color)]"></th>
            <th className="border border-[#ccc] p-2 text-[var(--text-color)]"></th>
            <th className="border border-[#ccc] p-2 text-[var(--text-color)] text-[1.2rem]">Produto</th>
            <th className="border border-[#ccc] p-2 text-[var(--text-color)] text-[1.2rem]">Preço</th>
            <th className="border border-[#ccc] p-2 text-[var(--text-color)] text-[1.2rem]">Quantidade</th>
            <th className="border border-[#ccc] p-2 text-[var(--text-color)] text-[1.2rem]">Subtotal</th>
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
                <td className="border border-[#ccc] p-2 text-center text-[var(--text-color)]">
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
                <td className="flex flex-col items-center content-center border border-[#ccc] p-2 text-center text-[var(--text-color)]">
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  />
                </td>

                <td className="border border-[#ccc] p-2 text-[var(--text-color)] text-[1.2rem]">{item.title}</td>
                <td className="border border-[#ccc] p-2 text-center text-[var(--text-color)] text-[1.2rem]">{item.price}</td>
                <td className="border border-[#ccc] p-2 text-center text-[var(--text-color)] text-[1.2rem]">
                  <input
                    className="
                        w-20 p-2 border-2 border-gray-300 rounded-lg 
                        text-center text-base outline-none shadow-sm transition-all
                        focus:border-[#217FD1] focus:shadow-[0_0_8px_rgba(59,130,246,0.4)]
                    "
                    type="number"
                    value={quantity}
                    min={1}
                    onChange={(e) => handleQuantityChange(item.title, e.target.value)}
                    style={{ width: "60px" }}
                  />
                </td>
                <td className="border border-[#ccc] p-2 text-center text-[var(--text-color)] text-[1.2rem]">
                  R$ {subtotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </td>
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <td className="border border-[#ccc] p-2 text-center text-[var(--text-color)] text-[1.2rem]" colSpan={5} style={{ textAlign: "right", fontWeight: "bold", padding: "8px" }}>
              Total
            </td>
            <td className="border border-[#ccc] p-2 text-center text-[var(--text-color)]">
              R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </td>
          </tr>
        </tfoot>
      </table>
      <button className="
          mt-5 px-6 py-3 w-full 
          text-white text-lg font-bold 
          rounded-xl cursor-pointer transition-all 
          bg-gradient-to-r from-blue-500 to-purple-600
          shadow-md hover:from-blue-600 hover:to-purple-700
          hover:-translate-y-[2px] hover:shadow-lg
          active:translate-y-0 active:shadow-sm
    " type="button" onClick={clearCart}>Finalizar compra</button>
    </section>
  ) : (<section className="m-auto p-24 w-[800px]">
    <p className="text-2xl text-center font-bold text-[var(--text-color)]">O carrinho está vazio, adicione algum item ao carrinho para mostrar aqui.</p>
  </section>);
}

export default Cart;
